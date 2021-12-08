import React from "react";
import { Image as DefaultImage, ImageProps } from "react-native";


export default class Image extends React.Component<ImageProps> {
  render() {
    return (
      <DefaultImage
        {...this.props}
        style={[this.props.style]}
      >
        {this.props.children}
      </DefaultImage>
    );
  }
}
