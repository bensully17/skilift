import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground} from 'react-native'
import image from '../../Assets/mountains.png'

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs()
  }
  render () {
    return (   
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.container}>
            <Text style={styles.textHeading}>Sign Up Here!</Text>
            <Button title='Existing Users Login'></Button>
            <View style={styles.inputContainer}>
              <TextInput placeholder='Email Address' style={styles.input} underlineColorAndroid='transparent'/>
              <TextInput placeholder='Password' style={styles.input} underlineColorAndroid='transparent'/>
              <TextInput placeholder='Confirm Password' style={styles.input} underlineColorAndroid='transparent'/>
            </View>
            <Button title='Submit' onPress={this.loginHandler}></Button>
        </View>
      </ImageBackground> 
    )
  }
}

const styles = StyleSheet.create({
  outsideContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    width: '100%'
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    backgroundColor: '#eee',
    borderColor: '#bbb',
    padding: 5,
    margin: 8
  },
  textHeading: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  image: {
    flex: 1,
    alignItems: 'center'
  }
})

export default AuthScreen
