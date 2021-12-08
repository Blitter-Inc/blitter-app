import React, { useState, useEffect } from "react";
import { Alert, StyleSheet } from "react-native";
import { Avatar, Button, Input } from "react-native-elements";
import { launchImageLibraryAsync, requestMediaLibraryPermissionsAsync } from "expo-image-picker";
import {
  FormInputBioIcon,
  FormInputEmailIcon,
  FormInputNameIcon,
  SafeAreaView,
  View,
} from "$components/index";
import { useAppTheme } from "$config/theme";
import { useAppSelector, useAppDispatch } from "$store/hooks";
import { updateProfile } from "$store/slices/auth";
import { ProfileScreenElement, UserProfileInput } from "$types/modules/auth";


const useRequiredState = () => {
  const authState = useAppSelector(state => state.auth);
  return {
    authFlowComplete: authState.authFlowComplete,
    user: {
      id: authState.credentials.user.id,
      name: authState.credentials.user.name,
      email: authState.credentials.user.email,
      bio: authState.credentials.user.bio,
      avatar: authState.credentials.user.avatar,
    },
  };
};

const ProfileScreen: ProfileScreenElement = ({ navigation }) => {
  const ColorPalette = useAppTheme();

  const { user, ...state } = useRequiredState();
  const dispatch = useAppDispatch();
  const [avatarPlaceholderActive, setAvatarPlaceholderActive] = useState(true);
  const [profile, setProfile] = useState<UserProfileInput>({
    name: user.name,
    email: user.email,
    bio: user.bio,
    avatar: user.avatar ? { uri: user.avatar, fromState: true } : require("$assets/avatar.png"),
  });

  useEffect(() => {
    if (state.authFlowComplete) {
      navigation.getParent()?.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    }
  }, [state.authFlowComplete]);

  const updateProfileState = (changes: Partial<UserProfileInput>) => {
    setProfile({ ...profile, ...changes });
  };

  const pickAvatar = async () => {
    const { status } = await requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Sorry, we need camera roll permissions to make this work!");
    } else {
      const result = await launchImageLibraryAsync();
      if (!result.cancelled) {
        updateProfileState({ avatar: { uri: result.uri, name: `${user.id}.jpg`, type: 'image/jpeg' } });
        setAvatarPlaceholderActive(false);
      }
    }
  };

  const onSubmit = () => {
    dispatch(updateProfile(profile));
  };

  return (
    <SafeAreaView>
      <View style={styles.avatarWrapper}>
        <View style={[{ backgroundColor: ColorPalette.ACCENT }, styles.avatarWrapperBackground]} />
        <Avatar
          title={profile.name?.[0]}
          source={profile.avatar}
          onPress={pickAvatar}
          size={180}
          avatarStyle={avatarPlaceholderActive ? styles.avatar : undefined}
          containerStyle={[{ backgroundColor: ColorPalette.PRIMARY }, styles.avatarContainer]}
        >
          <Avatar.Accessory size={35} />
        </Avatar>
      </View>
      <View style={styles.form}>
        <Input
          leftIcon={<FormInputNameIcon color={ColorPalette.ACCENT} size={25} />}
          leftIconContainerStyle={{ paddingRight: 10 }}
          placeholder="Name"
          value={profile.name}
          onChangeText={name => updateProfileState({ name })}
        />
        <Input
          leftIcon={<FormInputEmailIcon color={ColorPalette.ACCENT} size={20} />}
          leftIconContainerStyle={{ paddingRight: 8 }}
          placeholder="Email (optional)"
          autoCapitalize="none"
          value={profile.email}
          onChangeText={email => updateProfileState({ email })}
        />
        <Input
          leftIcon={<FormInputBioIcon color={ColorPalette.ACCENT} size={20} />}
          leftIconContainerStyle={{ paddingRight: 10 }}
          style={{ paddingTop: 10, maxHeight: 60 }}
          multiline={true}
          placeholder="Bio"
          value={profile.bio}
          onChangeText={bio => updateProfileState({ bio })}
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
    resizeMode: "cover"
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
