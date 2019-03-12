// Components/WodItem.js

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class WodItem extends React.Component {
  render() {
    const wod = this.props.wods
    return (
      <View style={styles.main_container}>
        <Text style={styles.title_text}>{wod.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190
  },
  title_text: {
    
  }
})

export default WodItem