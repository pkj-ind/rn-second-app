import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding:50}}>
      <View style={{flexDirection : 'row', justifyContent:'space-between', alignContent:'center'}}>
        <TextInput style={{borderColor: 'black', borderWidth: 1, width:'80%'}} />
        <Button title="Add"/>
      </View>
      <View>

      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
