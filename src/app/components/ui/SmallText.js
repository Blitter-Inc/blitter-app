import React from "react";
import { Text, StyleSheet } from "react-native";

const SmallText = ({ children, style = {} }) => (
  <Text style={{ ...styles.smallText, ...style }}>{children}</Text>
);

const styles = StyleSheet.create({
  smallText: {
    fontSize: 12,
    color: "black",
    marginHorizontal: 5,
  },
});

export default SmallText;
