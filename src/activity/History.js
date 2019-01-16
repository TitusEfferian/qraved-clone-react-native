import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class History extends React.Component {
    static navigationOptions ={
        
    }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>History!</Text>
      </View>
    );
  }
}

export default History