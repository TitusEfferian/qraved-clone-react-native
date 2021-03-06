import React from 'react'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Favourite from '../activity/Favourite';
import History from '../activity/History';
import Search from '../activity/Search';
import MyProfile from '../activity/MyProfile';
import { RED_COLOR, GRAY_COLOR, FONT_BOLD } from '../styles';
import Home from '../activity/Home';
import Icon from 'react-native-vector-icons/MaterialIcons'
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFontawesome from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import TabNavigator from '../activity/Home/TabNavigation';
import Header from '../components/Header';
import ForkIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../components/Button';
import { Text, View, TouchableOpacity } from 'react-native'
import SearchActivity from '../activity/Home/Search';

const HeaderHome = (props) => {
  return (
    <View style={{ backgroundColor: 'white' }}>
      <Header>
        <ForkIcon name="silverware-fork-knife" size={24} color={RED_COLOR}></ForkIcon>
        <Button style={{ backgroundColor: GRAY_COLOR, justifyContent: 'space-between' }}>
          <Text style={FONT_BOLD}>Jakarta</Text>
          <Icon name="keyboard-arrow-down" style={{ marginLeft: 16 }} size={24}></Icon>
        </Button>
        <TouchableOpacity onPress={() => { props.navigation.navigate('SearchActivity') }}>
          <Icon name="search" size={24}></Icon>
        </TouchableOpacity>
      </Header>
    </View>
  )
}

const BottomNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: TabNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={24} color={tintColor}></Icon>
        ),

      }
    },
    Favourite: {
      screen: Favourite,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <IconIonicons name="ios-heart" size={24} color={tintColor}></IconIonicons>
        ),
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <IconFontawesome name="plus-square-o" size={24} color={tintColor}></IconFontawesome>
        ),
      }
    },
    History: {
      screen: History,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="history" size={24} color={tintColor}></Icon>
        ),
      }
    },
    MyProfile: {
      screen: MyProfile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <IconAntDesign name="profile" size={24} color={tintColor}></IconAntDesign>
        ),
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: RED_COLOR,
    },
    lazy: true,
    
  }
)

const StacksOverTabs = createStackNavigator({
  Root: {
    screen: BottomNavigation,
    navigationOptions: {
      header: (props) => {
        if (props.scenes[0].route.index == 0) {
          return (
            <HeaderHome {...props} />
          )
        }
      },
    },
  },
  SearchActivity: {
    screen: SearchActivity,
  },
  Profile: {
    screen: SearchActivity,
  },
});

export default createAppContainer(StacksOverTabs)