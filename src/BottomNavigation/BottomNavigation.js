import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from '../activity/Home';
import Favourite from '../activity/Favourite';
import History from '../activity/History';
import Search from '../activity/Search';
import MyProfile from '../activity/MyProfile';
import { RED_COLOR } from '../styles';

const BottomNavigation = createBottomTabNavigator({
    Home: HomeScreen,
    Favourite: Favourite,
    Search: Search,
    History: History,
    MyProfile: MyProfile
},
    {
        tabBarOptions: {
            showLabel: false,
            activeTintColor: RED_COLOR
        },
    })

export default createAppContainer(BottomNavigation)