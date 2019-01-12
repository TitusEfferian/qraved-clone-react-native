import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class HomeScreen extends React.Component {
    static navigationOptions ={
        tabBarIcon:({tintColor})=>(
            <Icon name="home" size={24} color={tintColor}></Icon>
        ),
    }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

export default HomeScreen