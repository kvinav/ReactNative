import React from 'react';
import {
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import WodItem from '../components/items/WodItem';
import { getWods } from '../API/WodApi'

export default class HomeScreen extends React.Component {
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
          data={wods}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <WodItem/>}
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
