import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { GRAY_COLOR } from '../../styles';
import Sections from '../../components/Sections';
import Icon from 'react-native-vector-icons/MaterialIcons'

class SearchActivity extends React.PureComponent {
  static navigationOptions = {
    header: null
  }
  render() {
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
            >

            </TextInput>
          </View>
          <Text style={{ width: '20%', textAlign: 'center' }} onPress={() => { this.props.navigation.pop() }}>cancel</Text>
        </Sections>
      </View>
    )
  }
}

export default SearchActivity