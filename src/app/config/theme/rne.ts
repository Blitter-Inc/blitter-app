import ColorPalette from "./color";
import { FullTheme } from "react-native-elements";


const ComponentMap: Partial<FullTheme> = {
  Avatar: {
    rounded: true,
  },
  Button: {
    buttonStyle: {
      backgroundColor: ColorPalette.ACCENT,
    },
  },
  SearchBar: {
    containerStyle: {
      backgroundColor: ColorPalette.ACCENT,
    },
    inputContainerStyle: {
      backgroundColor: ColorPalette.ACCENT,
    },
    inputStyle: {
      backgroundColor: ColorPalette.SECONDARY,
      color: ColorPalette.FONT.INPUT,
    },
  }
};


export default ComponentMap;
