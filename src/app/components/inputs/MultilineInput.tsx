import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { AppThemeHookProps, withAppTheme } from "$config/theme";
import { ContainerizedComponentProps } from "$types/components";


class MultilineInput extends React.Component<TextInputProps & AppThemeHookProps & ContainerizedComponentProps> {
  render() {
    const {
      appTheme,
      containerStyle,
      ...textInputProps
    } = this.props;
    return (
      <View style={[styles.container, { borderColor: appTheme.ACCENT }, containerStyle]}>
        <TextInput
          {...textInputProps}
          style={[
            textInputProps.style,
            { color: appTheme.FONT.INPUT },
            styles.input,
          ]}
          placeholderTextColor={appTheme.FONT.PLACEHOLDER}
          multiline
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    borderWidth: 2,
    borderRadius: 18,
    height: 150,
    padding: 5,
  },
  input: {
    fontSize: 18,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
});


export default withAppTheme(MultilineInput);
