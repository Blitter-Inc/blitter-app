import ColorPalette from "./color";
import { FullTheme } from "react-native-elements";
import adjust from "./adjust";


const ComponentMap: Partial<FullTheme> = {
  Avatar: {
    rounded: true,
  },
  Button: {
    buttonStyle: {
      backgroundColor: ColorPalette.ACCENT,
    },
  },
  Input: {
    labelStyle: {
      color: ColorPalette.ACCENT,
    },
    inputStyle: {
      color: ColorPalette.ACCENT,
      fontSize: adjust(13),
    },
    inputContainerStyle: {
      borderBottomColor: ColorPalette.ACCENT,
    },
    placeholderTextColor: ColorPalette.FONT.PLACEHOLDER,
  },
  Overlay: {
    overlayStyle: {
      maxHeight: "75%",
      maxWidth: "90%",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 25,
    },
    animationType: "fade",
  },
  SearchBar: {
    clearIcon: {
      name: "clear",
      color: ColorPalette.PRIMARY,
    },
    searchIcon: {
      name: "search",
      color: ColorPalette.PRIMARY,
    },
    placeholderTextColor: ColorPalette.PRIMARY,
    containerStyle: {
      backgroundColor: ColorPalette.ACCENT,
    },
    inputContainerStyle: {
      backgroundColor: ColorPalette.ACCENT,
    },
    inputStyle: {
      backgroundColor: ColorPalette.SECONDARY,
    },
  },
  Icon: {
    color: ColorPalette.FONT.INPUT,
  },
  Text: {
    h2Style: {
      fontWeight: "800",
    },
    style: { },
  }
};


export default ComponentMap;
