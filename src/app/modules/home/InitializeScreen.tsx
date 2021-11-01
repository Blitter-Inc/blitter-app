import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { Styles } from "$config/theme";
import { useAppDispatch, useAppSelector } from "$store/hooks";
import { InitializeScreenElement } from "$types/modules/home";
import { initializeApp } from "$store/slices/cache";


const useRequiredState = () => {
  const { appInitialized } = useAppSelector(state => state.cache);
  return { appInitialized };
};

const InitializeScreen: InitializeScreenElement = ({ navigation }) => {
  const state = useRequiredState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (state.appInitialized) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    } else {
      dispatch(initializeApp());
    }
  }, [state.appInitialized]);

  return (
    <View style={[Styles.ExpandedContainer, Styles.FlexCenteredContainer, { backgroundColor: "pink" }]}>
      <Text style={{ fontSize: 18 }}>Initializing App...</Text>
    </View>
  );
};


export default InitializeScreen;
