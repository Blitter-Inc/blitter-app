import React, { FC } from "react";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { StyleSheet } from "react-native";
import { Avatar, Button, Input, Header, useTheme } from "react-native-elements";
import { SafeAreaView, View } from "@components/ui";


const ProfileScreen: FC = () => {
  const { theme: { ColorPalette } } = useTheme();
  return (
    <>
      <Header
        leftComponent={{ text: "Profile" }}
      />
      <SafeAreaView>
        <View style={styles.avatar}>
          <View style={[{ backgroundColor: ColorPalette.ACCENT }, styles.avatarBackground]} />
          <Avatar
            size={180}
            source={{ uri: "https://picsum.photos/150/150" }}
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
          />
          <Button title="Submit" style={{ marginVertical: 16 }} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: "35%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarBackground: {
    width: "100%",
    height: "55%",
    position: "absolute",
    top: 0,
  },
  form: {
    height: "65%",
    width: "100%",
    padding: "8%",
  },
});


export default ProfileScreen;
