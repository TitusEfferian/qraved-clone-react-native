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
            style={{ width: 100, height: 100, marginRight: index == this.props.data.length - 1 ? 0 : 16, backgroundColor: this.state.onLoad ? GRAY_COLOR : null }}
            onLoad={() => { this.setState({ onLoad: false }) }}
        >
        </ImageBackground>

    );

    render() {
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
                    ListEmptyComponent={() => (
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ width: 100, height: 100, backgroundColor: GRAY_COLOR, marginRight: 16 }}>
                            </View>
                            <View style={{ width: 100, height: 100, backgroundColor: GRAY_COLOR, marginRight: 16 }}>
                            </View>
                            <View style={{ width: 100, height: 100, backgroundColor: GRAY_COLOR, marginRight: 16 }}>
                            </View>
                            <View style={{ width: 100, height: 100, backgroundColor: GRAY_COLOR, marginRight: 16 }}>
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
    rightLabel: PropTypes.string.isRequired
}

export default Widget