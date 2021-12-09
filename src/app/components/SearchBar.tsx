import React, { useContext } from "react";
import { StyleSheet, StatusBar } from "react-native";
import {
  SearchBar as RNESearchBar,
} from "react-native-elements";
import { SearchContext } from "$config/context";
import { SearchBarComponent } from "$types/components";


const SearchBar: SearchBarComponent = ({ placeholder = "Search", searchBarProps }) => {
  const { search, setSearch } = useContext(SearchContext);

  return (
    <RNESearchBar
      {...searchBarProps}
      {...styles}
      placeholder={placeholder}
      value={search}
      onChangeText={setSearch}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderTopWidth: 0,
    height: StatusBar.currentHeight && StatusBar.currentHeight + 56,
    justifyContent: "flex-end",
    borderBottomWidth: 0,
  },
  inputContainerStyle: {
    borderRadius: 15,
    borderBottomColor: "#fff",
  },
  inputStyle: {
    paddingLeft: 8,
    borderRadius: 15,
    marginHorizontal: 8,
    color: "#fff",
  },
});


export default SearchBar;
