import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useAppTheme } from "$config/theme";
import { FileGallaryComponent } from "$types/components";
import { AddSquareIcon } from "./Icons";
import LabeledContainer from "./LabeledContainer";


const FileGallery: FileGallaryComponent = () => {
  const ColorPalette = useAppTheme();

  return (
    <LabeledContainer label="Attachments">
      <TouchableOpacity style={[styles.container, { borderColor: ColorPalette.ACCENT }]} >
        <AddSquareIcon color={ColorPalette.ACCENT} size={40} />
        <Text style={[styles.text, { color: ColorPalette.FONT.INPUT }]}>Tap to add a file</Text>
      </TouchableOpacity >
    </LabeledContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 18,
    height: 120,
  },
  text: {
    fontSize: 15,
    margin: 5,
  },
});


export default FileGallery;
