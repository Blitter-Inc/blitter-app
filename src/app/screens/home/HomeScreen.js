import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Click on any of the buttons to navigate</Text>
      <Button title='Event Organizer' />
      <Button title='Bill Manager' />
      <Button title='Expence Tracker' />
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
