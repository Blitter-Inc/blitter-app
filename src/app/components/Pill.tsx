import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useAppTheme } from "$config/theme";
import { PillComponent } from "$types/components";


const Pill: PillComponent = ({ label, size, icon, containerStyle, onPress }) => {
  const ColorPalette = useAppTheme();

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: ColorPalette.ACCENT }, containerStyle]} onPress={onPress}>
      <Text style={[styles.text, { fontSize: size - 3 }]}>{label}</Text>
      {icon}
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
    paddingLeft: 15,
    paddingRight: 12,
  },
  text: {
    color: "white",
    fontSize: 15,
  },
});


export default Pill;
