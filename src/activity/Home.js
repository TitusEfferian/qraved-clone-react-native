import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux'
import { requestDataHome } from '../redux/actions/actions';

class HomeScreen extends React.Component {
    static navigationOptions ={
        tabBarIcon:({tintColor})=>(
            <Icon name="home" size={24} color={tintColor}></Icon>
        ),
    }
    componentDidMount(){
      this.props.requestFetchHome()
    }
  render() {
    console.log(this.props.homeData)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

function mapStateToProps(state){
  return{
    homeData:state.fetchHomePage
  }
}

function mapDispatchToProps(dispatch){
  return{
    requestFetchHome:()=>dispatch(requestDataHome())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)