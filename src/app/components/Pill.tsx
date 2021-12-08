import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useAppTheme } from "$config/theme";
import { PillComponent } from "$types/components";


const Pill: PillComponent = ({ label, size, containerStyle, onPress, LeftIcon, RightIcon }) => {
  const ColorPalette = useAppTheme();

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: ColorPalette.ACCENT }, containerStyle]} onPress={onPress}>
      {LeftIcon && <LeftIcon color="white" size={size} containerStyle={styles.leftIcon} />}
      <Text style={[styles.text, { fontSize: size - 3 }]}>{label}</Text>
      {RightIcon && <RightIcon color="white" size={size} containerStyle={styles.rightIcon} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 25,
    margin: 5,
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 12,
  },
  text: {
    color: "white",
  },
  leftIcon: {
    paddingLeft: 3,
    paddingRight: 5,
    paddingTop: 1,
  },
  rightIcon: {
    paddingRight: 3,
    paddingLeft: 5,
    paddingTop: 1,
  },
});


export default Pill;
