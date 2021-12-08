import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { Image, View } from "$components/index";


interface AuthContainerProps {
  children: ReactNode;
};

type AuthContainerComponent = (props: AuthContainerProps) => JSX.Element;

export const AuthContainer: AuthContainerComponent = ({ children }) => (
  <View style={styles.screen}>
    <Image
      style={styles.image}
      source={require("$assets/login-screen-image.png")}
    />
    {children}
  </View>
);

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 50,
    paddingHorizontal: 10,
    flex: 1,
    alignItems: "center",
  },
  image: {
    height: "40%",
    width: "80%",
  },
});
