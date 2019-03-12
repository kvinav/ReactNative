// Components/WodItem.js

import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import HTML from 'react-native-render-html';

class WodItem extends React.Component {
  render() {
    const wod = this.props.wods
    console.log(wod);
    return (
      <View style={styles.main_container}>
        <Text style={styles.title_text}>{wod.name}</Text>
        <Text style={styles.title_text}>{ wod.time }</Text>
        <Text style={styles.username}>Par {wod.username} le {wod.date}</Text>
        <Text style={styles.wod_title}>Entrainement : </Text>
        <HTML html={wod.work} />
        <Text style={styles.weight_title}>Poids : </Text>
        <HTML html={wod.weight} />
        <Text style={styles.comment_title}>Commentaire : </Text>
        <HTML html={wod.comment} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 'auto',
    textAlign: 'center',
    borderWidth: 0.5,
    borderColor: '#000',
    marginTop: 20,
    marginBottom: 20,
    padding: 30,
  },
  title_text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  username: {
    fontStyle: 'italic',
    textAlign: 'center',
  },
  wod_title: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 10,
    textAlign: 'center',
    borderTopWidth: 0.5,
    marginTop: 20,
  },
  weight_title: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 10,
    textAlign: 'center',
    borderTopWidth: 0.5,
    marginTop: 20,
  },
  comment_title: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 10,
    textAlign: 'center',
    borderTopWidth: 0.5,
    marginTop: 20,
  }
})

export default WodItem