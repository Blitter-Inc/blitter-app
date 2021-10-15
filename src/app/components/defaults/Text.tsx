import React from "react";
import { Text as DefaultText, TextProps } from "react-native";
import { ThemeConsumer } from "react-native-elements";


export default class Text extends React.Component<TextProps> {
  render() {
    return (
      <ThemeConsumer>
        {({ theme }) => {
          const { ReactNativeDefault: { Text: themeProps } } = theme;
          return (
            <DefaultText
              {...themeProps}
              {...this.props}
              style={[themeProps.style, this.props.style]}
            >
              {this.props.children}
            </DefaultText>
          );
        }}
      </ThemeConsumer>
    );
  }
}
