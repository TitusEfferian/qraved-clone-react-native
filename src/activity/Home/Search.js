import React from 'react'
import { View, Text, TextInput,ActivityIndicator,FlatList } from 'react-native'
import { GRAY_COLOR, FONT_BOLD, FONT_SIZE_LARGE, RED_COLOR } from '../../styles';
import Sections from '../../components/Sections';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'
import { requestSearchRestorant, resetReduxState } from '../../redux/actions/searchRestorant';
import RestorantResult from '../../components/RestorantResult';

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

  componentWillUnmount(){
    this.props.resetReduxState()
  }

  doSearch(query) {
    var searchText = query
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.reqSearch(searchText)
    }, 300);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: GRAY_COLOR }}>
        <Sections style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }}>
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
        <Sections style={{flex:1,padding:8}}>
          {
            this.props.restorant.data == undefined
            ?
              this.props.restorant.isFetching
              ?
                <View style={{ flex: 1,justifyContent:'center',alignItems:'center'}}>
                  <ActivityIndicator size='large' color={RED_COLOR}/>
                </View>
                :
                null
            :
            <View>
            <Text style={{
              ...FONT_BOLD,
              ...FONT_SIZE_LARGE
            }}>
              Restaurant
            </Text>

            </View>
          }
            <RestorantResult/>

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
    reqSearch: (query) => dispatch(requestSearchRestorant(query)),
    resetReduxState:()=>dispatch(resetReduxState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchActivity)