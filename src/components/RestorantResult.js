import React from 'react'
import { View, Text } from 'react-native'
import { GRAY_COLOR, FONT_GRAY, FONT_SIZE_NORMAL } from '../styles';

const RestorantResult = (props) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                marginTop:16
            }}
        >
            <View style={{
                width: 60,
                height: 60,
                borderRadius: 4,
                backgroundColor: 'red',
            }}>

            </View>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 16
            }}>
                <Text>
                    Sushi go
                </Text>
                <Text
                    style={{
                        marginTop:4,
                        ...FONT_GRAY,
                    }}
                >
                    Thamrin
                </Text>
            </View>

        </View>
    )
}

export default RestorantResult