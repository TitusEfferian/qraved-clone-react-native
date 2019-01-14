import React from 'react'
import { View, Text } from 'react-native'
import { requsetCities } from '../../redux/actions/cities';
import { connect } from 'react-redux'
class ForYou extends React.Component {
    static navigationOptions = {
        title: 'For You'
    }
    componentDidMount(){
        this.props.fetchCities()
    }
    render() {
        console.log(this.props.cities)
        return (
            <View style={{ flex: 1 }}>
                <Text>For You</Text>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        cities: state.cities
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCities: () =>  dispatch(requsetCities()) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ForYou)