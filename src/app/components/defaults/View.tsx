import React from "react";
import { View as DefaultView, ViewProps } from "react-native";
import { ThemeConsumer } from "react-native-elements";


export default class View extends React.Component<ViewProps> {
  render() {
    return (
      <ThemeConsumer>
        {({ theme }) => {
          const { ReactNativeDefault: { View: themeProps } } = theme;
          return (
            <DefaultView
              {...themeProps}
              {...this.props}
              style={[themeProps.style, this.props.style]}
            >
              {this.props.children}
            </DefaultView>
          );
        }}
      </ThemeConsumer>
    );
  }
}
