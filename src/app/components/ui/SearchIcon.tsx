import React from "react";
import { useTheme } from "react-native-elements";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "./SearchBar";


export default () => {
  const { theme: { ColorPalette } } = useTheme();
  const navigation = useNavigation();

  const openSearchBar = () => {
    navigation.setOptions({
      header: SearchBar,
    });
  };

  return (
    <FontAwesomeIcon name="search" color={ColorPalette.FONT.TEXT} size={22} style={{
      paddingHorizontal: 15,
    }} onPress={openSearchBar} />
  );
}
