import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Click on any of the buttons to navigate</Text>
      <Button title='Event Organizer' onPress={() => console.log('Event Organizer Pressed')} />
      <Button title='Bill Manager' onPress={() => console.log('Bill Manager Pressed')} />
      <Button title='Expence Tracker' onPress={() => console.log('Expence Tracker Pressed')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default HomeScreen;
