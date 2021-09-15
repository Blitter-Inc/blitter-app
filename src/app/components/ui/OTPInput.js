import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const OTPInput = (props) => {
  const { refCallback, ...remainingProps } = props;
  return (
    <View style={styles.containerStyle}>
      <></>
      <TextInput
        {...remainingProps}
        ref={refCallback}
        style={[styles.textInputStyle]}
      />
      <></>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginRight: 12,
    flex: 1,
  },
  textInputStyle: {
    color: "#087aaf",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    height: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OTPInput;
