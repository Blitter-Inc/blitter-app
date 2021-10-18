import React from "react";
import { View as DefaultView, ViewProps } from "react-native";


export default class View extends React.Component<ViewProps> {
  render() {
    return (
      <DefaultView
        {...this.props}
        style={[this.props.style]}
      >
        {this.props.children}
      </DefaultView>
    );
  }
}
