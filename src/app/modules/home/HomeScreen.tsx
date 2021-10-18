import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, BottomSheet, ListItem, Text } from "react-native-elements";
import { View } from "@components/index";
import { useAppTheme } from "@config/theme";
import { HomeScreenElement } from "@d/modules/home";
import { RootStackParamList } from "@d/navigations";


const HomeScreen: HomeScreenElement = ({ navigation }) => {
  const ColorPalette = useAppTheme();

  const [isVisible, setIsVisible] = useState(false);

  const navigatePage = (pageUri: keyof RootStackParamList) => {
    navigation.navigate(pageUri);
    setIsVisible(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: ColorPalette.PRIMARY }]}>
      <Text style={styles.text}>Click on below button to show app components</Text>
      <Button title="Open Screens" onPress={() => setIsVisible(true)} />
      <BottomSheet isVisible={isVisible} modalProps={{
        onTouchStart: () => setIsVisible(false),
      }}>
        <ListItem onPress={() => navigatePage("BillNavigator")}>
          <ListItem.Content>
            <ListItem.Title>Bill Manager</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem onPress={() => console.log("Event Organizer Pressed")}>
          <ListItem.Content>
            <ListItem.Title>Event Organizer</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem onPress={() => console.log("Expence Tracker Pressed")}>
          <ListItem.Content>
            <ListItem.Title>Expence Tracker</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem onPress={() => setIsVisible(false)}>
          <ListItem.Content>
            <ListItem.Title>Close</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    margin: 25,
  },
});


export default HomeScreen;
