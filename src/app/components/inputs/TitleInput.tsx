import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { withAppTheme } from "$config/theme";
import { AppThemeHookProps } from "$types/config/theme";


class TitleInput extends React.Component<TextInputProps & AppThemeHookProps> {
  render() {
    const {
      appTheme,
      ...textInputProps
    } = this.props;
    return (
      <View style={styles.container}>
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
    marginLeft: 3,
    marginBottom: 24,
  },
  input: {
    fontSize: 36,
    fontWeight: "bold",
  },
});


export default withAppTheme(TitleInput);
