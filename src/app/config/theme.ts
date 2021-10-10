import ColorPalette from "./color";
import { FullTheme, ReactNativeDefault } from "react-native-elements";


const RNE_COMPONENTS: Partial<FullTheme> = {
  Avatar: {
    rounded: true,
  },
  Button: {
    buttonStyle: {
      backgroundColor: ColorPalette.ACCENT,
    },
  },
};

const RN_DEFAULT_COMPONENTS: ReactNativeDefault = {
  Image: {
    style: {},
  },
  SafeAreaView: {
    style: {
      backgroundColor: ColorPalette.PRIMARY,
    },
  },
  Text: {
    style: {},
  },
  View: {
    style: {
      backgroundColor: ColorPalette.PRIMARY,
    },
  },
};


export default {
  ...RNE_COMPONENTS,
  ReactNativeDefault: RN_DEFAULT_COMPONENTS,
  ColorPalette,
};
