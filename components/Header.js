// Components/WodItem.js

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

class Header extends React.Component {
  render() {
    return (
        <View style={styles.header}>
        <Text style={styles.logo}>
          My Wod Journal
          
        </Text>
         <Ionicons
        name="md-stopwatch"
        size={26}
        style={styles.icon}
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
  }
});

export default Header