import React, { FC, ReactNode } from "react";
import { View, Image, StyleSheet } from "react-native";


type AuthContainerProps = {
  children: ReactNode;
  style: object;
};

export const AuthContainer: FC = ({ children, style = {} }: AuthContainerProps) => (
  <View style={{ ...styles.screen, ...style }}>
    <Image
      style={styles.image}
      source={require("@assets/login-screen-image.png")}
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
