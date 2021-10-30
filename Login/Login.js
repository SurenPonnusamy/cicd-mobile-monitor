import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class Login extends Component {
	
 	constructor() {
		super() 
		
		this.state = {
			username: "",
			password: ""
		}
	}
	
	onChangeUsername = (event) => {
		//console.log(event)
		this.setState({
			username: event
		})
	}
	onChangePassword = (event) => {
		//console.log(event)
		this.setState({
			password: event
		})
	}
	
	submit = () => {
		console.log(this.state); 
		var username = this.state.username
		var password = this.state.password
		
		var loggedIn = false
		
		if(username === "admin" && password === "admin@123") {
			loggedIn = true;
		}
		else {
			loggedIn = false;
		}

		if(loggedIn) {
			this.props.navigation.navigate('Home')
		}
		else {
			Alert.alert(
				'Authentication error',
				'Incorrect username or password'
			)
		}
	}
		
  render() {
  return (
    <View style={styles.container}>
	  <Text style={ styles.text }>Welcome back to cicd-mobile-monitor application</Text>
	  <TextInput
		placeholder="Enter the username here"
		onChangeText={this.onChangeUsername}
	  />
	  <TextInput
	    secureTextEntry={true}
		placeholder="Enter the password here"
		onChangeText={this.onChangePassword}
	  />
	  <Button
		title="Get the username"
		onPress={this.submit}
	  />
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
