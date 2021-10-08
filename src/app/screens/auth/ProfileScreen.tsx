import React, { useState, useEffect } from "react";
import { Alert, StyleSheet } from "react-native";
import { Avatar, Button, Input, useTheme } from "react-native-elements";
import { launchImageLibraryAsync, requestMediaLibraryPermissionsAsync } from "expo-image-picker";
import {
  FormInputBioIcon,
  FormInputEmailIcon,
  FormInputNameIcon,
  SafeAreaView,
  View,
} from "@components/ui";


const ProfileScreen = ({ navigation }) => {
  const { theme: { ColorPalette } } = useTheme();
  const [avatarSource, setAvatarSource] = useState(require("@assets/avatar.png"));
  const [avatarPlaceholderActive, setAvatarPlaceholderActive] = useState(true);
  const [profileUpdated] = useState(false);    // TODO: To be removed after API integration

  useEffect(() => {
    if (profileUpdated) {
      Alert.alert("You are now logged in!");
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    }
  }, [profileUpdated]);   // TODO: To be changed after API integration

  const pickAvatar = async () => {
    const { status } = await requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Sorry, we need camera roll permissions to make this work!");
    } else {
      const result = await launchImageLibraryAsync();
      if (!result.cancelled) {
        setAvatarSource({ uri: result.uri });
        setAvatarPlaceholderActive(false);
      }
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.avatarWrapper}>
        <View style={[{ backgroundColor: ColorPalette.ACCENT }, styles.avatarWrapperBackground]} />
        <Avatar
          source={avatarSource}
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
          leftIcon={<FormInputNameIcon color={ColorPalette.FONT.INPUT} />}
          leftIconContainerStyle={{ paddingRight: 10 }}
          placeholder="Name"
        />
        <Input
          leftIcon={<FormInputEmailIcon color={ColorPalette.FONT.INPUT} />}
          leftIconContainerStyle={{ paddingRight: 8 }}
          placeholder="Email (optional)"
          autoCapitalize="none"
        />
        <Input
          leftIcon={<FormInputBioIcon color={ColorPalette.FONT.INPUT} />}
          leftIconContainerStyle={{ paddingRight: 10 }}
          style={{ paddingTop: 10, maxHeight: 60 }}
          multiline={true}
          placeholder="Bio"
        />
        <Button title="Submit" style={{ marginVertical: 16 }} />
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
  },
  form: {
    height: "65%",
    width: "100%",
    padding: "8%",
  },
});


export default ProfileScreen;
