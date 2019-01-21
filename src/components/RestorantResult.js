import React from 'react'
import { View, Text,ImageBackground } from 'react-native'
import { GRAY_COLOR, FONT_GRAY, FONT_SIZE_NORMAL } from '../styles';

const RestorantResult = (props) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                marginTop: 16
            }}
        >
            <ImageBackground
            style={{
                width:60,
                height:60,
                borderRadius:8,
                overflow:'hidden'
            }}
            imageStyle={{
                backgroundColor:GRAY_COLOR
            }}
            source={{uri:'https://www.qraved.com/'+props.imageUrl}}
            />

            <View style={{
                justifyContent: 'center',
                marginLeft: 16
            }}>
                <Text>
                    {props.title}
                </Text>
                <Text
                    style={{
                        marginTop: 4,
                        ...FONT_GRAY,
                    }}
                >
                    {props.location.district.name}
                </Text>
            </View>
        </View>
    )
}

export default RestorantResult