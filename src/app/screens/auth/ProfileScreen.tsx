import React, { useState, useEffect } from "react";
import { Alert, StyleSheet } from "react-native";
import { Avatar, Button, Input, useTheme } from "react-native-elements";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { launchImageLibraryAsync, requestMediaLibraryPermissionsAsync } from "expo-image-picker";
import { SafeAreaView, View } from "@components/ui";
import { useAppSelector, useAppDispatch } from "@store/hooks";
import { initUpdateProfile } from "@store/slices/auth";


const useRequiredState = () => {
  const authState = useAppSelector(state => state.auth);
  return {
    authFlowComplete: authState.authFlowComplete,
    avatar: authState.credentials.user.avatar,
    bio: authState.credentials.user.bio,
    email: authState.credentials.user.email,
    id: authState.credentials.user.id,
    name: authState.credentials.user.name,
  };
};

const ProfileScreen = ({ navigation }) => {
  const { theme: { ColorPalette } } = useTheme();

  const state = useRequiredState();
  const dispatch = useAppDispatch();
  const [avatarPlaceholderActive, setAvatarPlaceholderActive] = useState(true);
  const [profile, setProfile] = useState({
    id: state.id,
    name: state.name,
    email: state.email,
    bio: state.bio,
    avatar: state.avatar ? { uri: state.avatar, fromState: true } : require("@assets/avatar.png"),
  });

  useEffect(() => {
    if (state.authFlowComplete) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    }
  }, [state.authFlowComplete]);

  const updateProfile = (change) => {
    setProfile({ ...profile, ...change });
  };

  const pickAvatar = async () => {
    const { status } = await requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Sorry, we need camera roll permissions to make this work!");
    } else {
      const result = await launchImageLibraryAsync();
      if (!result.cancelled) {
        updateProfile({ avatar: { uri: result.uri, name: `${state.id}.jpg`, type: 'image/jpeg' } });
        setAvatarPlaceholderActive(false);
      }
    }
  };

  const onSubmit = () => {
    dispatch(initUpdateProfile({
      ...profile,
      avatar: ((typeof profile.avatar === "number" || profile.avatar.fromState) ? "" : profile.avatar),
    }));
  };

  return (
    <SafeAreaView>
      <View style={styles.avatarWrapper}>
        <View style={[{ backgroundColor: ColorPalette.ACCENT }, styles.avatarWrapperBackground]} />
        <Avatar
          source={profile.avatar}
          onPress={pickAvatar}
          size={180}
          avatarStyle={avatarPlaceholderActive && styles.avatar}
          containerStyle={[{ backgroundColor: ColorPalette.PRIMARY }, styles.avatarContainer]}
        >
          <Avatar.Accessory size={35} />
        </Avatar>
      </View>
      <View style={styles.form}>
        <Input
          leftIcon={
            <FontAwesomeIcon
              name="user"
              color={ColorPalette.FONT.INPUT}
              size={25}
            />
          }
          leftIconContainerStyle={{ paddingRight: 10 }}
          placeholder="Name"
          value={profile.name}
          onChangeText={name => updateProfile({ name })}
        />
        <Input
          leftIcon={
            <FontAwesomeIcon
              name="envelope"
              color={ColorPalette.FONT.INPUT}
              size={20}
            />
          }
          leftIconContainerStyle={{ paddingRight: 8 }}
          placeholder="Email (optional)"
          autoCapitalize="none"
          value={profile.email}
          onChangeText={email => updateProfile({ email })}
        />
        <Input
          leftIcon={
            <FontAwesomeIcon
              name="info-circle"
              color={ColorPalette.FONT.INPUT}
              size={20}
            />
          }
          leftIconContainerStyle={{ paddingRight: 10 }}
          style={{ paddingTop: 10, maxHeight: 60 }}
          multiline={true}
          placeholder="Bio"
          value={profile.bio}
          onChangeText={bio => updateProfile({ bio })}
        />
        <Button title="Submit" style={{ marginVertical: 16 }} onPress={onSubmit} disabled={profile.name == ""} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  avatarWrapper: {
    height: "35%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarWrapperBackground: {
    width: "100%",
    height: "55%",
    position: "absolute",
    top: 0,
  },
  avatar: {
    top: 10,
    resizeMode: "center"
  },
  avatarContainer: {
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 1,
  },
  form: {
    height: "65%",
    width: "100%",
    padding: "8%",
  },
});


export default ProfileScreen;
