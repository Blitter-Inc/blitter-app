import React, { useState } from "react";
import { StyleSheet, StatusBar } from "react-native";
import { FullTheme, SearchBar as RNESearchBar, ThemeProps, withTheme } from "react-native-elements";


interface SearchBarProps extends ThemeProps<FullTheme> {
  placeholder?: string;
};

type SearchBarComponent = (props: SearchBarProps) => JSX.Element;

const SearchBar: SearchBarComponent = ({ placeholder = "Search", theme: { ColorPalette } }) => {
  const [searchText, setSearchText] = useState('');

  return (
      <RNESearchBar {...styles} placeholder={placeholder} value={searchText} onChangeText={text => setSearchText(text)} />
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    borderTopWidth: 0,
    height: StatusBar.currentHeight + 56,
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


export default withTheme(SearchBar, 'theme');
