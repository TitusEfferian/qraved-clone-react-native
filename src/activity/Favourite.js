import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Favourite extends React.Component {
    static navigationOptions ={
        tabBarIcon:({tintColor})=>(
            <Icon name="ios-heart" size={24} color={tintColor}></Icon>
        ),
    }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>favourite!</Text>
      </View>
    );
  }
}

export default Favourite