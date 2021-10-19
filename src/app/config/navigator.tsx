import React from "react";
import { View } from "react-native";
import { Easing } from "react-native-reanimated";
import { TransitionPresets } from "@react-navigation/stack";
import { SearchIcon } from "$components/index";
import { GetBaseScreenOptions, GetNavigatorScreenOptions, GetSlidingScreenOptions } from "$types/navigation";


export const getNavigatorScreenOptions: GetNavigatorScreenOptions = (
  headerPrimaryColor,
  headerAccentColor,
  disableBackButton = false,
) => ({
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
  headerBackTitleVisible: false,
  headerBackTitleStyle: {
    color: headerAccentColor,
  },
  headerTintColor: headerAccentColor,
});

export const getBaseScreenOptions: GetBaseScreenOptions = (enableSearch = false) => ({
  headerTitleAlign: "center",
  headerRight: enableSearch ? (() => <SearchIcon />) : undefined,
});

export const getSlidingScreenOptions: GetSlidingScreenOptions = () => ({
  headerLeft: undefined,
  headerTitle: "",
  ...TransitionPresets.RevealFromBottomAndroid,
  transitionSpec: {
    open: {
      animation: "timing",
      config: {
        duration: 500,
        easing: Easing.ease,
      },
    },
    close: {
      animation: "timing",
      config: {
        duration: 300,
        easing: Easing.ease,
      },
    },
  },
});
