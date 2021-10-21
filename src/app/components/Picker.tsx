import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements"
import {
  Picker as DefaultPicker,
  PickerProps as DefaultPickerProps,
} from "@react-native-picker/picker";
import { isAndroid } from "$config/index";
import { BadgePickerComponent, PickerComponent, PickerItemComponent } from "$types/components";
import View from "./defaults/View";
import { useAppTheme } from "$config/theme";


export const Picker: PickerComponent = ({ label, children, ...pickerProps }) => {
  const ColorPalette = useAppTheme();
  const androidSpecificProps: DefaultPickerProps = isAndroid ? { mode: "dropdown" } : {};
  const colorStyle = { color: ColorPalette.ACCENT };

  return (
    <View>
      <Text style={[pickerStyles.label, colorStyle]}>{label}</Text>
      <DefaultPicker
        {...pickerProps}
        {...androidSpecificProps}
        style={[pickerProps.style, pickerStyles.picker, colorStyle]}
        itemStyle={[pickerProps.itemStyle, pickerStyles.itemStyle, colorStyle]}
      >
        {children}
      </DefaultPicker>
    </View>
  );
};

export const PickerItem: PickerItemComponent = (props) => (
  <DefaultPicker.Item {...props} />
);

export const BadgePicker: BadgePickerComponent = ({ containerStyle, ...pickerProps }) => {
  const ColorPalette = useAppTheme();

  return (
    <View style={[badgePickerStyles.container, { backgroundColor: ColorPalette.SECONDARY }, containerStyle]}>
      <DefaultPicker
        {...pickerProps}
        style={[pickerProps.style, badgePickerStyles.picker]}
        itemStyle={[pickerProps.itemStyle]}
      >
        {pickerProps.children}
      </DefaultPicker>
    </View>
  );
};

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
  picker: isAndroid ? {
    marginTop: 8,
    marginBottom: 16,
    marginLeft: 3,
  } : {},
});

const badgePickerStyles = StyleSheet.create({
  container: {
    borderRadius: 25,
    paddingVertical: 8,
    paddingLeft: 8,
    justifyContent: "center",
    width: 140,
    height: "70%",
  },
  picker: {
    margin: 0,
    padding: 0,
    color: "white",
    fontWeight: "600",
  },
});
