import { createAppContainer, createStackNavigator } from 'react-navigation';
import BottomNavigation from '../BottomNavigation/BottomNavigation';

const RootStack = createStackNavigator({
    Root: BottomNavigation
})

export default createAppContainer(RootStack)