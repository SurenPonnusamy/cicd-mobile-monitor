import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class Home extends Component {

  render() {
  return (
    <View style={styles.container}>
	  <Text>Inside the Home component</Text>
    </View>
  )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'wheat',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  text: {
	  color: 'red'
  }
});