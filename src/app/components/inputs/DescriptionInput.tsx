import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { withAppTheme } from "$config/theme";
import { DescriptionInputProps } from "$types/components";
import LabeledBoxContainer from "$components/LabeledBoxContainer";


class DescriptionInput extends React.Component<DescriptionInputProps> {
  render() {
    const {
      appTheme,
      containerStyle,
      ...textInputProps
    } = this.props;
    return (
      <LabeledBoxContainer label="Description">
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
      </LabeledBoxContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 18,
    minHeight: 100,
    maxHeight: 150,
    padding: 5,
  },
  input: {
    fontSize: 15,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
});


export default withAppTheme(DescriptionInput);
