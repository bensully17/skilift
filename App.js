import { Navigation } from 'react-native-navigation'
import AuthScreen from './src/screens/Auth/Auth';

// Register Screens 

Navigation.registerComponent('skilyft.AuthScreen', () => AuthScreen)

//Start an app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'skilyft.AuthScreen',
    title: 'Login'
  }
})