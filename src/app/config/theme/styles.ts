import { StyleSheet } from "react-native";
import { StyleProps } from "$types/config/theme";


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
  FloatingIcon: {
    position: "absolute",
    bottom: 22,
    right: 5,
  },
});
