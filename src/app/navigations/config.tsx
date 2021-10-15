import React from "react";
import { View } from "react-native";
import { SearchIcon } from "@components/index";
import { GetBaseScreenOptions, GetNavigatorScreenOptions, GetNestedNavigatorOptions } from "@d/navigation";


export const getNavigatorScreenOptions: GetNavigatorScreenOptions = (headerPrimaryColor, headerAccentColor, disableBackButton = false) => ({
  // animationEnabled: false,
  headerTitleAlign: "left",
  headerTitleContainerStyle: {
    paddingLeft: 2,
  },
  headerStyle: {
    backgroundColor: headerPrimaryColor,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    fontSize: 20,
    color: headerAccentColor,
  },
  headerLeft: disableBackButton ? (() => <View />) : undefined,
  // headerBackTitleVisible: false,
  headerBackTitleStyle: {
    color: headerAccentColor,
  },
  headerTintColor: headerAccentColor,
});

export const getBaseScreenOptions: GetBaseScreenOptions = (enableSearch = false) => ({
  headerTitleAlign: "center",
  headerRight: enableSearch ? (() => <SearchIcon />) : undefined,
});

export const getNestedNavigatorOptions: GetNestedNavigatorOptions = () => ({
  headerShown: false,
});
