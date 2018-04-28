import { Navigation } from 'react-native-navigation'
import AuthScreen from './src/screens/Auth/Auth';
import CarpoolScreen from './src/screens/Carpool/Carpool'
import ProfileScreen from './src/screens/Profile/Profile'

// Register Screens 

Navigation.registerComponent('skilyft.AuthScreen', () => AuthScreen)
Navigation.registerComponent('skilyft.CarpoolScreen', () => CarpoolScreen)
Navigation.registerComponent('skilyft.ProfileScreen', () => ProfileScreen)

//Start an app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'skilyft.AuthScreen',
    title: 'SkiLyft'
  }
})