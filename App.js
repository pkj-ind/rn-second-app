import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Welcome" style={styles.input} />
        <Button title="Add"/>
      </View>
      <View
      style={{
        padding:20,
        flexDirection: 'row',
        width: '80%',
        height: 300,
        justifyContent: 'space-around',
        alignItems: 'stretch',
      }}
    >
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'flex-start'
        }}
      >
        <Text>3</Text>
        <Text>4</Text>
        <Text>5</Text>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:50
  },
  inputContainer: {
  flexDirection : 'row', 
  justifyContent:'space-between', 
  alignContent:'center'},
  input:{borderColor: 'black', borderWidth: 1, width:'80%'}
  
});
