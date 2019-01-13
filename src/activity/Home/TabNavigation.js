import React from 'react'
import { View } from 'react-native'
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import ForYou from './ForYou';
import Journal from './Journal';
import { RED_COLOR } from '../../styles';

const TabNavigator = createMaterialTopTabNavigator({
    ForYou: ForYou,
    Journal: Journal,
    Guide: Journal,
    Video: Journal,
},
    {
        tabBarOptions: {
            style: {
                backgroundColor: 'white',
            },
            labelStyle: {
                fontWeight: 'bold',
            },
            inactiveTintColor: 'black',
            activeTintColor: RED_COLOR,
            indicatorStyle: {
                backgroundColor: RED_COLOR
            },
            scrollEnabled: true,
        },
        animationEnabled: false,
        lazy: false,
        
    })

export default createAppContainer(TabNavigator)