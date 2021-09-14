import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading</Text>
    </View>
  );
}

const dimentions = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: dimentions.height,
    width: dimentions.width,
    backgroundColor: 'black',
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
