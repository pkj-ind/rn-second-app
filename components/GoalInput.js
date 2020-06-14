import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function GoalInput(props) {

  const [enterGoal, setEnterGoal] = useState("");

  const handleChangeText = (enteredText) => {
    setEnterGoal(enteredText);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add Goales"
        style={styles.input}
        onChangeText={handleChangeText}
        value={enterGoal}
      />
      <Button title="Add" onPress={() => props.addGoal(enterGoal,setEnterGoal)} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginBottom: 10,
  },
  input: { borderColor: "black", borderWidth: 1, width: "80%" },
});
