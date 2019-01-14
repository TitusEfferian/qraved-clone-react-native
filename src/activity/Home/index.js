import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ForkIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux'
import { requestDataHome } from '../../redux/actions/actions';
import Header from '../../components/Header';
import { GRAY_COLOR, FONT_BOLD, RED_COLOR } from '../../styles';
import Button from '../../components/Button';
import TabNavigation from './TabNavigation';

class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.requestFetchHome()
  }
  render() {
    console.log(this.props.homeData)
    return (
      <View style={{ flex: 1 }}>
        <Header>
          <ForkIcon name="silverware-fork-knife" size={24} color={RED_COLOR}></ForkIcon>
          <Button style={{ backgroundColor: GRAY_COLOR, justifyContent: 'space-between' }}>
            <Text style={FONT_BOLD}>Jakarta</Text>
            <Icon name="keyboard-arrow-down" style={{ marginLeft: 16 }} size={24}></Icon>
          </Button>
          <Icon name="search" size={24}></Icon>
        </Header>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    homeData: state.fetchHomePage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    requestFetchHome: () => dispatch(requestDataHome())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)