import { StyleSheet } from "react-native";
import { StyleProps } from "$types/config/theme";


export default StyleSheet.create<StyleProps>({
  ActionBarContainer: {
    height: "5%",
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
    height: "95%",
    width: "100%",
    paddingHorizontal: 15, 
    paddingTop: 5,
    marginBottom: 10,
  },
  FloatingIcon: {
    position: "absolute",
    bottom: 12,
    right: 12,
    borderRadius: 35,
  },
  ContentContainer: {
    marginHorizontal: 12,
  },
});
