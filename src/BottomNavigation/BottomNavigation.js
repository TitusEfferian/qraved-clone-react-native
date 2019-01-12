import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../activity/Home';

const BottomNavigation = createBottomTabNavigator({
    Home:HomeScreen
})

export default createAppContainer(BottomNavigation)