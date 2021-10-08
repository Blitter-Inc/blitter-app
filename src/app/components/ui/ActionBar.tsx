import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "react-native-elements";
import { ContainerProps } from "@d/theme/styles";
import { Text, View } from "./defaults";


interface ActionBarProps {
  styles: ContainerProps;
}

const ActionBar = ({ styles: propStyles }: ActionBarProps) => {
  const { theme: { ColorPalette } } = useTheme();

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
