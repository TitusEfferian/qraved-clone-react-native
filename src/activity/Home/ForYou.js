import React from 'react'
import { View, ScrollView } from 'react-native'
import { requsetCities } from '../../redux/actions/cities';
import { connect } from 'react-redux'
import Widget from '../../components/Widget';
import { GRAY_COLOR } from '../../styles';
import { requestDataHome } from '../../redux/actions/fetchHomePage';
class ForYou extends React.Component {
    static navigationOptions = {
        title: 'For You'
    }
    componentDidMount() {
        // this.props.fetchCities()
        this.props.fetchHome()
    }
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: GRAY_COLOR }}>
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
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCities: () => dispatch(requsetCities()),
        fetchHome: () => dispatch(requestDataHome())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForYou)