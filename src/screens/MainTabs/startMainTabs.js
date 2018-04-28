import { Navigation } from 'react-native-navigation'

const startTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'skilyft.CarpoolScreen',
        label: 'Carpoolers',
        title: 'Carpoolers'
      },
      {
        screen: 'skilyft.ProfileScreen',
        label: 'Profile',
        title: 'Your Profile'
      }
    ]
  })
}

export default startTabs