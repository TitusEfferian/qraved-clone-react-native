import React from 'react'
import { View, ScrollView, Modal, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { requsetCities } from '../../redux/actions/cities';
import { connect } from 'react-redux'
import Widget from '../../components/Widget';
import { GRAY_COLOR, FONT_BOLD, FONT_SIZE_LARGE, FONT_GRAY } from '../../styles';
import { requestDataHome } from '../../redux/actions/fetchHomePage';
import { requestModal } from '../../redux/actions/modalActived';
import Icon from 'react-native-vector-icons/MaterialIcons'
class ForYou extends React.Component {
    static navigationOptions = {
        title: 'For You'
    }
    componentDidMount() {
        this.props.fetchCities()
        this.props.fetchHome()
    }
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: GRAY_COLOR }}>
                <Modal
                    animationType="fade"
                    transparent={false}
                    visible={this.props.modal.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <SafeAreaView style={{ flex: 1 }}>
                        <TouchableOpacity activeOpacity={1} onPress={() => { this.props.requestModal() }} style={{ alignItems: 'center', marginTop: 16, flexDirection: 'row', justifyContent: 'flex-end', marginRight: 16 }}>
                            <Icon name="close" size={32}></Icon>
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{...FONT_BOLD,...FONT_SIZE_LARGE,marginBottom:8}}>Discover Other Cities</Text>
                            <Text style={{...FONT_GRAY,marginBottom:16}}>explore the best food and places...</Text>
                            {
                                this.props.cities.data != undefined
                                    ?
                                    this.props.cities.data.map(x => (
                                        <TouchableOpacity key={x.id}>
                                            <Text style={{ ...FONT_SIZE_LARGE, ...FONT_BOLD, marginBottom: 24 }}>{x.name}</Text>
                                        </TouchableOpacity>
                                    ))
                                    :
                                    null
                            }
                        </View>
                    </SafeAreaView>
                </Modal>
                {
                    this.props.home.data != undefined
                        ?
                        <Widget leftLabel='New Restaurants' rightLabel='show all' data={this.props.home.data.homeSections[2].data} isRestorant={true}></Widget>
                        :
                        <Widget leftLabel='New Restaurants' rightLabel='show all' isLoading={true}></Widget>
                }
                {
                    this.props.home.data != undefined
                        ?
                        <Widget leftLabel='For You' rightLabel='show all' data={this.props.home.data.homeSections[0].data}></Widget>
                        :
                        <Widget leftLabel='For You' rightLabel='show all' isLoading={true}></Widget>

                }
                {
                    this.props.home.data != undefined
                        ?
                        <Widget leftLabel='Occasion' rightLabel='show all' data={this.props.home.data.homeSections[3].data}></Widget>
                        :
                        <Widget leftLabel='Occasion' rightLabel='show all' isLoading={true}></Widget>
                }
                {
                    this.props.home.data != undefined
                        ?
                        <Widget leftLabel='Latest news' rightLabel='show all' data={this.props.home.data.homeSections[1].data} isNews={true}></Widget>
                        :
                        <Widget leftLabel='Latest news' rightLabel='show all' isLoading={true}></Widget>
                }
                {
                    this.props.home.data != undefined
                        ?
                        <Widget leftLabel='Trending Article' rightLabel='show all' data={this.props.home.data.homeSections[4].data} isNews={true}></Widget>
                        :
                        <Widget leftLabel='Trending Article' rightLabel='show all' isLoading={true}></Widget>
                }
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        cities: state.cities,
        home: state.fetchHomePage,
        modal: state.modal
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCities: () => dispatch(requsetCities()),
        fetchHome: () => dispatch(requestDataHome()),
        requestModal: () => dispatch(requestModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForYou)