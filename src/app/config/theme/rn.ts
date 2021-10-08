import ColorPalette from "./color";
import { ReactNativeDefault } from "react-native-elements";


const ComponentMap: ReactNativeDefault = {
  Image: {
    style: {},
  },
  SafeAreaView: {
    style: {
      backgroundColor: ColorPalette.PRIMARY,
    },
  },
  Text: {
    style: {
      fontSize: 18,
    },
  },
  View: {
    style: {},
  },
};


export default ComponentMap;
