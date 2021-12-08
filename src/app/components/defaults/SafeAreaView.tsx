import React from "react";
import { SafeAreaView as DefaultSafeAreaView, ViewProps } from "react-native";


export default class SafeAreaView extends React.Component<ViewProps> {
  render() {
    return (
      <DefaultSafeAreaView
        {...this.props}
        style={[this.props.style]}
      >
        {this.props.children}
      </DefaultSafeAreaView>
    );
  }
}
