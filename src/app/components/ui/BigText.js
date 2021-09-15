import React from "react";
import { Text, StyleSheet } from "react-native";

const BigText = ({ children, style = {} }) => (
  <Text style={{ ...styles.bigText, ...style }}>{children}</Text>
);

const styles = StyleSheet.create({
  bigText: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
    margin: 5,
  },
});

export default BigText;
