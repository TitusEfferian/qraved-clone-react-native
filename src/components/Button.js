import React from 'react'
import { View } from 'react-native'

const Button = (props) => {
    return (
        <View style={[{ ...props.style }, { paddingHorizontal:16,paddingVertical:4,borderRadius:30,flexDirection:'row',alignItems:'center' }]}>
            {props.children}
        </View>
    )
}

export default Button