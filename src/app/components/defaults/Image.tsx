import React from "react";
import { Image as DefaultImage, ImageProps } from "react-native";
import { ThemeConsumer } from "react-native-elements";


export default class Image extends React.Component<ImageProps> {
  render() {
    return (
      <ThemeConsumer>
        {({ theme }) => {
          const { ReactNativeDefault: { Image: themeProps } } = theme;
          return (
            <DefaultImage
              {...themeProps}
              {...this.props}
              style={[themeProps.style, this.props.style]}
            >
              {this.props.children}
            </DefaultImage>
          );
        }}
      </ThemeConsumer>
    );
  }
}
