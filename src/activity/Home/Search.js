import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { GRAY_COLOR } from '../../styles';
import Sections from '../../components/Sections';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'
import { requestSearchRestorant } from '../../redux/actions/searchRestorant';

class SearchActivity extends React.PureComponent {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  doSearch(query) {
    var searchText = query
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.reqSearch(searchText)
    }, 300);
  }

  render() {
    console.log(this.props.restorant)
    return (
      <View style={{ flex: 1, backgroundColor: GRAY_COLOR }}>
        <Sections style={{ marginBottom: 8, flexDirection: 'row', alignItems: 'center', padding: 8 }}>
          <View style={{ width: '80%', backgroundColor: GRAY_COLOR, padding: 8, borderRadius: 4, flexDirection: 'row', alignItems: 'center' }}>
            <Icon size={24} name="search"></Icon>
            <TextInput
              placeholder="search restaurant"
              style={{
                marginLeft: 16,
                flex: 1
              }}
              onChangeText={
                (query) => {
                  if (query.length != 0) {
                    this.doSearch(query)
                  }
                }
              }
            >

            </TextInput>
          </View>
          <Text style={{ width: '20%', textAlign: 'center' }} onPress={() => { this.props.navigation.pop() }}>cancel</Text>
        </Sections>
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
    reqSearch: (query) => dispatch(requestSearchRestorant(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchActivity)