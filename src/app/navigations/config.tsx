import React from "react";
import { View } from "react-native";
import { SearchIcon } from "@components/ui";
import { GetBaseScreenOptions, GetNavigatorScreenOptions, GetNestedNavigatorOptions } from "@d/navigation";


export const getNavigatorScreenOptions: GetNavigatorScreenOptions = (headerBackgroundColor, disableBackButton = false) => ({
  headerTitleAlign: "left",
  headerTitleContainerStyle: {
    paddingLeft: 2,
  },
  headerStyle: {
    backgroundColor: headerBackgroundColor,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    fontSize: 20,
  },
  // headerLeft: disableBackButton && (() => <View />),
  headerBackTitleVisible: false,
});

export const getBaseScreenOptions: GetBaseScreenOptions = (enableSearch = false) => ({
  headerTitleAlign: "center",
  headerRight: enableSearch && (() => <SearchIcon />),
});

export const getNestedNavigatorOptions: GetNestedNavigatorOptions = () => ({
  headerShown: false,
});
