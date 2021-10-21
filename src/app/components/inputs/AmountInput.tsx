import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { AppThemeHookProps, withAppTheme } from "$config/theme";
import { ContainerizedComponentProps } from "$types/components";
import { RupeeIcon } from "../Icons";


class AmountInput extends React.Component<TextInputProps & AppThemeHookProps & ContainerizedComponentProps> {
  render() {
    const {
      appTheme,
      containerStyle,
      ...textInputProps
    } = this.props;
    return (
      <View style={[styles.container, { borderColor: appTheme.ACCENT }, containerStyle]}>
        <RupeeIcon color={appTheme.FONT.INPUT} />
        <TextInput
          {...textInputProps}
          style={[
            textInputProps.style,
            { color: appTheme.FONT.INPUT },
            styles.input,
          ]}
          placeholderTextColor={appTheme.FONT.PLACEHOLDER}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 25,
    paddingLeft: 8,
    paddingRight: 30,
  },
  input: {
    fontSize: 20,
    padding: 8,
    width: "100%",
  },
});


export default withAppTheme(AmountInput);
