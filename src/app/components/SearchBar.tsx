import React, { useState } from "react";
import { StyleSheet, StatusBar } from "react-native";
import {
  SearchBar as RNESearchBar,
  SearchBarProps as RNESearchBarProps,
} from "react-native-elements";


interface SearchBarProps {
  placeholder?: string;
  searchBarProps: RNESearchBarProps;
};

type SearchBarComponent = (props: SearchBarProps) => JSX.Element;

const SearchBar: SearchBarComponent = ({ placeholder = "Search", searchBarProps }) => {
  // const [searchText, setSearchText] = useState('');

  return (
    <RNESearchBar
      {...searchBarProps}
      {...styles}
      placeholder={placeholder}
    // value={searchText}
    // onChangeText={(text: string) => setSearchText(text)}
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
