import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { FONT_BOLD, FONT_SIZE_LARGE, FONT_SIZE_NORMAL, GRAY_COLOR } from '../styles';
import PropTypes from 'prop-types'
class Widget extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            onLoad: true
        }
    }
    _renderItem = ({ item, index }) => (
        <ImageBackground
            source={{ uri: 'https://www.qraved.com/jakarta/' + item.image }}
            style={{ width: 155, height: 143, marginRight: index == this.props.data.length - 1 ? 0 : 8, borderRadius: 8, overflow: 'hidden', backgroundColor: this.state.onLoad ? GRAY_COLOR : null }}
            imageStyle={{
                backgroundColor: GRAY_COLOR
            }}
            onLoad={() => { this.setState({ onLoad: false }) }}
        >   
            <View style={{ flex: 1, backgroundColor: 'black', opacity: 0.2 }}>
            </View>
            <Text style={{ position: 'absolute', bottom: 10, left: 10, ...FONT_BOLD, color: 'white' }}>{item.title}</Text>
        </ImageBackground>
    );

    _renderItemNews = ({ item, index }) => (
        <View style={{flex:1}}>

        
        <ImageBackground
            source={{ uri: 'https://www.qraved.com/jakarta/' + item.image }}
            style={{ width: 155, height: 143, marginRight: index == this.props.data.length - 1 ? 0 : 8, borderRadius: 8, overflow: 'hidden',zIndex:1, backgroundColor: this.state.onLoad ? GRAY_COLOR : null }}
            imageStyle={{
                backgroundColor: GRAY_COLOR
            }}
            onLoad={() => { this.setState({ onLoad: false }) }}
        >   
            <View style={{ flex: 1, backgroundColor: 'black', opacity: 0.2 }}>
            </View>
        </ImageBackground>
        <Text style={{   color: 'black',width:155 }}>{item.title}</Text>

        </View>
    );

    render() {
        if(this.props.isNews)
        {
            return(
                <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={{ ...FONT_BOLD, ...FONT_SIZE_LARGE }}>{this.props.leftLabel}</Text>
                    <Text style={{ ...FONT_SIZE_NORMAL }}>{this.props.rightLabel}</Text>
                </View>
                <FlatList
                    style={{ marginTop: 16 }}
                    data={this.props.isLoading ? undefined : this.props.data}
                    renderItem={this._renderItemNews}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ width: 155, height: 143, borderRadius: 8, backgroundColor: GRAY_COLOR, marginRight: 8 }}>
                            </View>
                            <View style={{ width: 155, height: 143, borderRadius: 8, backgroundColor: GRAY_COLOR, marginRight: 8 }}>
                            </View>
                            <View style={{ width: 155, height: 143, borderRadius: 8, backgroundColor: GRAY_COLOR, marginRight: 8 }}>
                            </View>
                            <View style={{ width: 155, height: 143, borderRadius: 8, backgroundColor: GRAY_COLOR, marginRight: 8 }}>
                            </View>
                        </View>
                    )
                    }
                    keyExtractor={(item, index) => index.toString()}
                ></FlatList>
            </View>
            )
        }
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={{ ...FONT_BOLD, ...FONT_SIZE_LARGE }}>{this.props.leftLabel}</Text>
                    <Text style={{ ...FONT_SIZE_NORMAL }}>{this.props.rightLabel}</Text>
                </View>
                <FlatList
                    style={{ marginTop: 16 }}
                    data={this.props.isLoading ? undefined : this.props.data}
                    renderItem={this._renderItem}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ width: 155, height: 143, borderRadius: 8, backgroundColor: GRAY_COLOR, marginRight: 8 }}>
                            </View>
                            <View style={{ width: 155, height: 143, borderRadius: 8, backgroundColor: GRAY_COLOR, marginRight: 8 }}>
                            </View>
                            <View style={{ width: 155, height: 143, borderRadius: 8, backgroundColor: GRAY_COLOR, marginRight: 8 }}>
                            </View>
                            <View style={{ width: 155, height: 143, borderRadius: 8, backgroundColor: GRAY_COLOR, marginRight: 8 }}>
                            </View>
                        </View>
                    )
                    }
                    keyExtractor={(item, index) => index.toString()}
                ></FlatList>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 8,
        padding: 16
    },
    title: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    }
})
Widget.propTypes = {
    leftLabel: PropTypes.string.isRequired,
    rightLabel: PropTypes.string.isRequired,
}

export default Widget