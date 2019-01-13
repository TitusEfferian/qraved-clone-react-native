import React from 'react'
import { View, StyleSheet } from 'react-native'

const Header = (props) => {
    return (
        <View style={[{...props.style},{
            paddingVertical:8,
            paddingHorizontal:16,
            justifyContent: 'space-between',
            alignItems:'center',
            flexDirection:'row',
        }]}>
            {props.children}
        </View>
    )
}

export default Header