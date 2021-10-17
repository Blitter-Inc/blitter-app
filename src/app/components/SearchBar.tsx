import React, { useState } from "react";
import { StyleSheet, StatusBar } from "react-native";
import { SearchBar as RNESearchBar } from "react-native-elements";


interface SearchBarProps {
  placeholder?: string;
};

type SearchBarComponent = (props: SearchBarProps) => JSX.Element;

const SearchBar: SearchBarComponent = ({ placeholder = "Search" }) => {
  const [searchText, setSearchText] = useState('');

  return (
    <RNESearchBar {...styles} placeholder={placeholder} value={searchText} onChangeText={(text: string) => setSearchText(text)} />
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    borderTopWidth: 0,
    height: StatusBar.currentHeight && StatusBar.currentHeight + 56,
    justifyContent: "flex-end",
    borderBottomWidth: 0,
  },
  inputContainerStyle: {
    borderRadius: 15,
  },
  inputStyle: {
    paddingLeft: 8,
    borderRadius: 15,
    marginHorizontal: 8,
  },
});


export default SearchBar;
