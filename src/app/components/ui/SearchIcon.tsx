import React from "react";
import { useTheme } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "./SearchBar";
import { HeaderSearchIcon } from "./Icons";


export default () => {
  const { theme: { ColorPalette } } = useTheme();
  const navigation = useNavigation();

  const openSearchBar = () => {
    navigation.setOptions({
      header: SearchBar,
    });
  };

  return (
    <HeaderSearchIcon color={ColorPalette.FONT.TEXT} onPress={openSearchBar} />
  );
}
