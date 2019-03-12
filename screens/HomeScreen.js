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
    let wods = getWods().then(data => data);
  }
  static navigationOptions = {
    header: null,
  };


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.logo}>
          My Wod Journal
        </Text>
          </View>
          <FlatList
          style={styles.flatList}
          data={this.wods}
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
