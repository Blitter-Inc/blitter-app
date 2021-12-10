import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ContainerProps } from "$types/config/theme";
import Pill from "./Pill";
import Text from "./defaults/Text";
import View from "./defaults/View"
import { useAppTheme } from "$config/theme";
import { FilterIcon, SortAscendingIcon } from ".";


interface ActionBarComponentProps {
  styles: ContainerProps;
  addBtnHandler: () => void;
  sortHandler: (sort: string) => void;
};

type ActionBarComponent = (props: ActionBarComponentProps) => JSX.Element;

const ActionBar: ActionBarComponent = ({
  styles: propStyles,
  addBtnHandler,
  sortHandler,
}) => {
  const ColorPalette = useAppTheme();
  return (
    <View style={[propStyles, styles.container, { borderColor: ColorPalette.ACCENT }]}>
      <View style={{ flexDirection: "row", justifyContent: "flex-start", flex: 1 }}>
        <Pill label="Filter" size={16} containerStyle={styles.pill} outlined RightIcon={FilterIcon} />
        <Pill label="Latest First" size={16} containerStyle={styles.pill} outlined RightIcon={SortAscendingIcon} />
      </View>
      <TouchableOpacity style={styles.addBtn} onPress={addBtnHandler}>
        <Text style={styles.text}>Add +</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: 2,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  pill: {
    alignItems: "center",
    height: 28,
    margin: 0,
    paddingVertical: 0,
    paddingLeft: 12,
    paddingRight: 8,
    marginRight: 8,
  },
  text: {
    paddingHorizontal: 5,
    color: "red",
    fontWeight: "bold",
    fontSize: 15,
  },
  addBtn: { height: "100%", justifyContent: "center", paddingTop: 10 },
});


export default ActionBar;
