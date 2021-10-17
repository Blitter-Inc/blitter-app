import React from "react";
import { Text as DefaultText, TextProps } from "react-native";


export default class Text extends React.Component<TextProps> {
  render() {
    return (
      <DefaultText
        {...this.props}
        style={[this.props.style]}
      >
        {this.props.children}
      </DefaultText>
    );
  }
}
