import React from "react";
import { withTheme, ThemeProps, FullTheme } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { HeaderSearchIcon } from "./Icons";
import SearchBar from "./SearchBar";


type SearchIconComponent = (props: ThemeProps<FullTheme>) => JSX.Element;

const SearchIcon: SearchIconComponent = ({ theme: { ColorPalette } }) => {
  const navigation = useNavigation();

  const openSearchBar = () => {
    navigation.setOptions({
      header: SearchBar,
    });
  };

  return (
    <HeaderSearchIcon color={ColorPalette.ACCENT} onPress={openSearchBar} />
  );
};


export default withTheme(SearchIcon, 'theme');
