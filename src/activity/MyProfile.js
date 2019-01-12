import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

class MyProfile extends React.Component {
    static navigationOptions ={
        tabBarIcon:({tintColor})=>(
            <Icon name="profile" size={24} color={tintColor}></Icon>
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

export default MyProfile