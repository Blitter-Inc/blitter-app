import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default () => {
  return (
    <View style={styles.container} onPress={() => console.log('Loader Pressed')}>
      <Text style={styles.text}>Loading</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});
