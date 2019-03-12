import React from 'react';
import {
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import { MonoText } from '../components/StyledText';
import WodItem from '../components/items/WodItem';
import Header from '../components/Header';
import { getWods } from '../API/WodApi'

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = { wods: [] }
    this._wods = getWods().then(data => {
        this.setState({ wods: data })
    })
  }
  static navigationOptions = {
    header: null,
  };


  render() {
    return (
      <View style={styles.container}>
        <Header />
          <FlatList
          style={styles.flatList}
          data={this.state.wods}
          keyExtractor={(item) => item.wod.id.toString()}
          renderItem={({item}) => <WodItem wods={item.wod}/>}
        />
      </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'black',
    marginTop: 20,

  },
  logo: {
    flex: 14,
    color: 'white',
    paddingTop: 10, 
    paddingLeft: 10,
    fontSize: 18,
   
  },
  icon: {
    flex: 1,
    color: 'white',
    paddingTop: 10,
    paddingRight: 10,
  },
  flatList: {
    padding: 10,
  }
});
