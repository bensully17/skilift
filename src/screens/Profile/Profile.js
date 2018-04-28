import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Profile extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Profile</Text>
        <Text style={styles.text}>Goes</Text>
        <Text style={styles.text}>Here</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 35
  }
})
export default Profile