import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { withAppTheme, AppThemeHookProps } from "$config/theme";
import View from "./defaults/View";


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
    marginBottom: 15,
  },
  input: {
    fontSize: 36,
    fontWeight: "bold",
  },
});


export default withAppTheme(TitleInput);
