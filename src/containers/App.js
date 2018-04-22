/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import List from '../components/List'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Find Your Ride
        </Text>
        <List/>
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    alignSelf: 'center',
    fontSize: 20,
  }
});
