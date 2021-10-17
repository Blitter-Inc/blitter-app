import React from "react";
import { StyleSheet } from "react-native";
import { ContainerProps } from "@d/theme/styles";
import Text from "./defaults/Text";
import View from "./defaults/View"


interface ActionBarProps {
  styles: ContainerProps;
}

const ActionBar = ({ styles: propStyles }: ActionBarProps) => {

  return (
    <View style={[propStyles, styles.container]}>
      <Text>ActionBar will go here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
  }
});


export default ActionBar;
