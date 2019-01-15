import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { requestSearchRestorant } from '../../redux/actions/searchRestorant';
class Journal extends React.PureComponent {
    componentDidMount() {
        this.props.reqSearchRestorant('sushi')
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Journal</Text>
            </View>
        )
    }
}
function mapStateToProps(state) {
    return {
        restorant: state.searchRestorant
    }
}
function mapDispatchToProps(dispatch) {
    return {
        reqSearchRestorant: (query) => dispatch(requestSearchRestorant(query))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Journal)