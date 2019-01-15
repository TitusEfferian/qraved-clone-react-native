import React from 'react'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Favourite from '../activity/Favourite';
import History from '../activity/History';
import Search from '../activity/Search';
import MyProfile from '../activity/MyProfile';
import { RED_COLOR, GRAY_COLOR, FONT_BOLD } from '../styles';
import Home from '../activity/Home';
import Icon from 'react-native-vector-icons/MaterialIcons'
import TabNavigator from '../activity/Home/TabNavigation';
import Header from '../components/Header';
import ForkIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../components/Button';
import { Text, View } from 'react-native'

const HeaderHome = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header>
                <ForkIcon name="silverware-fork-knife" size={24} color={RED_COLOR}></ForkIcon>
                <Button style={{ backgroundColor: GRAY_COLOR, justifyContent: 'space-between' }}>
                    <Text style={FONT_BOLD}>Jakarta</Text>
                    <Icon name="keyboard-arrow-down" style={{ marginLeft: 16 }} size={24}></Icon>
                </Button>
                <Icon name="search" size={24}></Icon>
            </Header>
        </View>
    )
}


const BottomNavigation = createBottomTabNavigator(
    {
        Home: {
            screen: createStackNavigator({
                Home: {
                    screen: TabNavigator,
                    navigationOptions: {
                        headerTitle: () => <HeaderHome/>
                    }
                }
            }),
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="home" size={24} color={tintColor}></Icon>
                ),

            }
        },
        Favourite: Favourite,
        Search: Search,
        History: History,
        MyProfile: MyProfile
    },
    {
        tabBarOptions: {
            showLabel: false,
            activeTintColor: RED_COLOR,
        },
    }
)

export default createAppContainer(BottomNavigation)