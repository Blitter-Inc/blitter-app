import { useAppTheme } from "$config/theme";
import { LabeledBoxContainerComponent } from "$types/components";
import React from "react";
import { StyleSheet, Text, View } from "react-native";


const LabeledBoxContainer: LabeledBoxContainerComponent = ({ label, children }) => {
  const ColorPalette = useAppTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: ColorPalette.FONT.INPUT }]}>{label}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    marginLeft: 2,
    fontWeight: "bold",
    fontSize: 18,
  },
});


export default LabeledBoxContainer;
