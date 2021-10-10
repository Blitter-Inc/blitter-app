import React from "react";
import { SafeAreaView as DefaultSafeAreaView, ViewProps } from "react-native";
import { ThemeConsumer } from "react-native-elements";


export default class SafeAreaView extends React.Component<ViewProps> {
  render() {
    return (
      <ThemeConsumer>
        {({ theme }) => {
          const { ReactNativeDefault: { SafeAreaView: themeProps } } = theme;
          return (
            <DefaultSafeAreaView
              {...themeProps}
              {...this.props}
              style={[themeProps.style, this.props.style]}
            >
              {this.props.children}
            </DefaultSafeAreaView>
          );
        }}
      </ThemeConsumer>
    );
  }
}
