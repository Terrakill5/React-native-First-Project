import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Alert.alert('Has tocado el texto')}>

      <Text>Hello World!</Text>
      </TouchableWithoutFeedback>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
