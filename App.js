import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [enterGoal, setEnterGoal] = useState("");
  const [goalList, setGoalList] = useState([]);
  const handleChangeText = (enteredText) => {
    setEnterGoal(enteredText);
  };
  const addGoalHandler = () => {
    setGoalList((goalList) => [
      ...goalList,
      { key: Math.random().toString(), value: enterGoal },
    ]);
    setEnterGoal("");
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add Goales"
          style={styles.input}
          onChangeText={handleChangeText}
          value={enterGoal}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <FlatList
        data={goalList}
        renderItem={(itemData) => (
          <View style={styles.listItems}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />

      <View>
        <Text>I am testing scroll option</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginBottom: 10,
  },
  input: { borderColor: "black", borderWidth: 1, width: "80%" },
  listItems: {
    padding: 5,
    borderRadius: 4,
    backgroundColor: "#ccc",
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 5,
  },
});
