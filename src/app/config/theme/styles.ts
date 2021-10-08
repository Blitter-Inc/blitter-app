import { StyleSheet } from "react-native";
import { StyleProps } from "@d/theme/styles";


export default StyleSheet.create<StyleProps>({
  ActionBarContainer: {
    height: "8%",
    width: "100%",
    flexDirection: "row",
  },
  FlexCenteredContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  ExpandedContainer: {
    height: "100%",
    width: "100%",
  },
  ListContainer: {
    height: "92%",
    width: "100%",
  },
});
