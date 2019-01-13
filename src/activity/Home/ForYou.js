import React from 'react'
import { View, Text } from 'react-native'

class ForYou extends React.Component {
    static navigationOptions={
        title:'For You'
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>For You</Text>
            </View>
        )
    }
}

export default ForYou