import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet
} from 'react-native';
import Router from './Control/Router'

const App: () => Node = () => {
  return(
    <SafeAreaView style={styles.body}>
      <View style={styles.title}>
        <Text style={styles.title_text}>Kitchmate</Text>
      </View>
      <Router></Router>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body:{
    backgroundColor: "#88CBFB",
    flex: 1
  },
  title:{
    backgroundColor: "#0A369D",
    height: 30,
    color: "#FAFAFA",
    borderBottomColor: "#63A46C",
    borderBottomWidth: 2
  },
  title_text:{
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center'
  }
})
export default App;
