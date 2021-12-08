import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAppTheme } from "$config/theme";
import { LabeledContainerComponent } from "$types/components";


const LabeledContainer: LabeledContainerComponent = ({ label, labelProps, containerStyle, children }) => {
  const ColorPalette = useAppTheme();

  return (
    <View style={[styles.container, containerStyle]}>
      <Text {...labelProps} style={[styles.label, { color: ColorPalette.FONT.INPUT }, labelProps?.style]}>
        {label}
      </Text>
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
    fontWeight: "bold",
    fontSize: 14,
  },
});


export default LabeledContainer;
