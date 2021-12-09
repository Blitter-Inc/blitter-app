import React from "react";
import { StyleSheet } from "react-native";
import { ContainerProps } from "$types/config/theme";
import Text from "./defaults/Text";
import View from "./defaults/View"
import { Button } from "react-native-elements";


interface ActionBarProps {
  styles: ContainerProps;
  objectCount: number;
  objectName: string;
}

const ActionBar = ({ styles: propStyles, objectCount, objectName }: ActionBarProps) => {

  return (
    <View style={[propStyles, styles.container]}>
      <Text style={styles.text}>{objectCount} {objectName}{objectCount > 1 ? 's' : ''} found</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text}>Sort</Text>
        <Text style={styles.text}>Filter</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    marginBottom: 15,
  },
  text: {
    paddingHorizontal: 5,
    color: "red",
    fontWeight: "bold",
    fontSize: 15,
  },
});


export default ActionBar;
