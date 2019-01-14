import { createAppContainer, createStackNavigator } from 'react-navigation';
import BottomNavigation from '../BottomNavigation/BottomNavigation';

const RootStack = createStackNavigator({
    Root: {
        screen: BottomNavigation,
        navigationOptions: {
            header: null
        },
    }
})
export default createAppContainer(RootStack)