import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { withAppTheme } from "$config/theme";
import { TitleInputProps } from "$types/components";


class TitleInput extends React.Component<TitleInputProps> {
  render() {
    const {
      appTheme,
      containerStyle,
      ...textInputProps
    } = this.props;
    return (
      <View style={[styles.container, containerStyle]}>
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
    marginBottom: 24,
  },
  input: {
    fontSize: 34,
    fontWeight: "bold",
  },
});


export default withAppTheme(TitleInput);
