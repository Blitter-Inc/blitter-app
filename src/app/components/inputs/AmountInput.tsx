import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { withAppTheme } from "$config/theme";
import { AmountInputProps } from "$types/components";
import { RupeeIcon } from "../Icons";


class AmountInput extends React.Component<AmountInputProps> {
  render() {
    const {
      appTheme,
      containerStyle,
      size,
      ...textInputProps
    } = this.props;
    return (
      <View style={[styles.container, { borderColor: appTheme.ACCENT }, containerStyle]}>
        <RupeeIcon color={appTheme.FONT.INPUT} size={size} containerStyle={styles.icon} />
        <TextInput
          selectTextOnFocus
          keyboardType="numeric"
          textContentType="telephoneNumber"
          placeholderTextColor={appTheme.FONT.PLACEHOLDER}
          {...textInputProps}
          style={[
            { color: appTheme.FONT.INPUT, fontSize: size },
            textInputProps.style,
          ]}
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
  icon: {
    paddingLeft: 4,
    paddingTop: 3,
  },
});


export default withAppTheme(AmountInput);
