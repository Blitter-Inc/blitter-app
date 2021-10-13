import ColorPalette from "./color";
import { ReactNativeDefault } from "react-native-elements";
import adjust from "./adjust";


const ComponentMap: ReactNativeDefault = {
  Image: {
    style: {},
  },
  SafeAreaView: {
    style: {},
  },
  Text: {
    style: {
      fontSize: adjust(18),
    },
  },
  View: {
    style: {},
  },
};


export default ComponentMap;
