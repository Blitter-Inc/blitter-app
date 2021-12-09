import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useAppTheme } from "$config/theme";
import { SearchIconComponent } from "$types/components";
import { HeaderSearchIcon } from "./Icons";
import SearchBar from "./SearchBar";



const SearchIcon: SearchIconComponent = () => {
  const ColorPalette = useAppTheme();

  const navigation = useNavigation();

  const openSearchBar = () => {
    navigation.setOptions({
      header: () => <SearchBar />,
    });
  };

  return (
    <HeaderSearchIcon color={ColorPalette.ACCENT} onPress={openSearchBar} size={20} containerStyle={{
      marginRight: 15,
    }} />
  );
};


export default SearchIcon;
