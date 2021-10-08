import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SearchBar, useTheme } from "react-native-elements";

interface SearchBarProps {
  placeholder?: string;
};

export default ({ placeholder = "Search" }: SearchBarProps) => {
  const { theme: { ColorPalette } } = useTheme();
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={{ backgroundColor: ColorPalette.ACCENT }}>
      <SearchBar {...styles} placeholder={placeholder} value={searchText} onChangeText={setSearchText} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    borderTopWidth: 0,
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
