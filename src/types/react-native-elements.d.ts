import { ImageProps, ViewProps, TextProps } from "react-native";
import { FullTheme as DefaultFullTheme } from "react-native-elements";


declare module 'react-native-elements' {
  export interface ReactNativeDefault {
    Image: Partial<ImageProps>;
    SafeAreaView: ViewProps;
    Text: TextProps;
    View: ViewProps;
  }

  export interface FontColorPalette {
    INPUT: string;
    SUBTEXT: string;
    TEXT: string;
  }

  export interface ColorPalette {
    PRIMARY: string;
    ACCENT: string;
    FONT: FontColorPalette;
  }

  export interface FullTheme extends DefaultFullTheme {
    ReactNativeDefault: Partial<ReactNativeDefault>;
    ColorPalette: Partial<ColorPalette>;
  }
}
