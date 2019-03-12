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

import { MonoText } from '../components/StyledText';
import WodItem from '../components/items/WodItem';
import { getWods } from '../API/WodApi'

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props)
    this._wods = []
  }
  static navigationOptions = {
    header: null,
  };

  _loadWods() {
    getWods().then(data => {
      this._wods = data
      this.forceUpdate()
    });
    console.log(this._wods);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.logo}>
          My Wod Journal
        </Text>
          </View>
          <Button title='Rechercher' onPress={() => this._loadWods()}/>
          <FlatList
          style={styles.flatList}
          data={this._wods}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <WodItem wods={item}/>}
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
    height: 50,
    backgroundColor: 'black',
    marginTop: 20,

  },
  logo: {
    color: 'white',
    paddingTop: 10,
    fontSize: 18,
  },
  flatList: {
    padding: 10,
  }
});
