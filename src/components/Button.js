import React from 'react'
import { TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
import { requestModal } from '../redux/actions/modalActived';

class Button extends React.PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <TouchableOpacity onPress={()=>{this.props.modalRequest()}} style={[{ ...this.props.style }, { paddingHorizontal: 16, paddingVertical: 4, borderRadius: 30, flexDirection: 'row', alignItems: 'center' }]}>
                {this.props.children}
            </TouchableOpacity>
        )
    }
}

function mapStateToProps(state){
    return{
    }
}

function mapDispatchToProps(dispatch){
    return{
        modalRequest:()=>dispatch(requestModal())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Button)