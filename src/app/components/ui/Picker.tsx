import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements"
import { Picker as DefaultPicker } from "@react-native-picker/picker";
import { PickerComponent, PickerItemComponent } from "@d/components";
import { View } from "./defaults";


export const Picker: PickerComponent = ({ label, children, ...pickerProps }) => (
  <View>
    <Text style={pickerStyles.label}>{label}</Text>
    <DefaultPicker
      itemStyle={[pickerProps.itemStyle, pickerStyles.itemStyle]}
      {...pickerProps}
    >
      {children}
    </DefaultPicker>
  </View>
);

export const PickerItem: PickerItemComponent = (props) => (
  <DefaultPicker.Item {...props} />
);

const pickerStyles = StyleSheet.create({
  label: {
    paddingHorizontal: 10,
    paddingBottom: 0,
    fontSize: 16,
    fontWeight: "bold",
  },
  itemStyle: {
    height: 100,
    fontSize: 16,
  },
});
