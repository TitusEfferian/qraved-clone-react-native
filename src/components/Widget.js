import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { FONT_BOLD, FONT_SIZE_LARGE, FONT_SIZE_NORMAL, GRAY_COLOR, RED_COLOR } from '../styles';
import StarRating from 'react-native-star-rating'
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

    _renderItemRestorant = ({ item, index }) => (
        <View>
            <ImageBackground
                source={{ uri: 'https://www.qraved.com/jakarta/' + item.image }}
                style={{ width: 236, height: 132, marginRight: index == this.props.data.length - 1 ? 0 : 8, borderRadius: 8, overflow: 'hidden', backgroundColor: this.state.onLoad ? GRAY_COLOR : null, marginBottom: 8 }}
                imageStyle={{
                    backgroundColor: GRAY_COLOR
                }}
                onLoad={() => { this.setState({ onLoad: false }) }}
            >
                <View style={{ width: 236, height: 132, backgroundColor: 'black', opacity: 0.2 }}>
                </View>
                <Text style={{ position: 'absolute', bottom: 24, left: 10, ...FONT_BOLD, color: 'white' }}>{item.title}</Text>
                <Text style={{ position: 'absolute', bottom: 8, left: 10, color: 'white' }}>{item.districtName}</Text>
            </ImageBackground>
            {
                item.reviewCount == 0
                    ?
                    <Text>no rating yet</Text>
                    :
                    <View style={{ flexDirection: 'row',alignItems:'center' }}>
                        <Text style={{
                            marginRight: 8,
                            color: RED_COLOR,
                            ...FONT_BOLD
                        }}>
                            {
                                item.rating / 2
                            }
                        </Text>
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={item.rating / 2}
                            fullStarColor={RED_COLOR}
                            containerStyle={
                                {
                                    width: 24
                                }
                            }
                            starSize={16}
                        />
                        <Text style={{ marginLeft: 56 }}>
                            {
                                item.reviewCount + ' Reviews'
                            }
                        </Text>
                    </View>

            }
        </View>
    );

    _renderItemNews = ({ item, index }) => (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={{ uri: 'https://www.qraved.com/jakarta/' + item.image }}
                style={{ width: 155, height: 143, marginRight: index == this.props.data.length - 1 ? 0 : 8, borderRadius: 8, overflow: 'hidden', zIndex: 1, backgroundColor: this.state.onLoad ? GRAY_COLOR : null }}
                imageStyle={{
                    backgroundColor: GRAY_COLOR
                }}
                onLoad={() => { this.setState({ onLoad: false }) }}
            >
                <View style={{ flex: 1, backgroundColor: 'black', opacity: 0.2 }}>
                </View>
            </ImageBackground>
            <Text style={{ color: 'black', width: 155 }}>{item.title}</Text>

        </View>
    );

    render() {
        if (this.props.isNews) {
            return (
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
                        keyExtractor={(item, index) => index.toString()}
                    ></FlatList>
                </View>
            )
        }
        if (this.props.isRestorant) {
            return (
                <View style={styles.container}>
                    <View style={styles.title}>
                        <Text style={{ ...FONT_BOLD, ...FONT_SIZE_LARGE }}>{this.props.leftLabel}</Text>
                        <Text style={{ ...FONT_SIZE_NORMAL }}>{this.props.rightLabel}</Text>
                    </View>
                    <FlatList
                        style={{ marginTop: 16 }}
                        data={this.props.isLoading ? undefined : this.props.data}
                        renderItem={this._renderItemRestorant}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
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