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
      ...textInputProps
    } = this.props;
    return (
      <View style={[styles.container, { borderColor: appTheme.ACCENT }, containerStyle]}>
        <RupeeIcon color={appTheme.FONT.INPUT} size={20} containerStyle={styles.icon} />
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
  icon: {
    paddingLeft: 4,
    paddingTop: 4,
  },
  input: {
    fontSize: 20,
    padding: 8,
    width: "100%",
  },
});


export default withAppTheme(AmountInput);
