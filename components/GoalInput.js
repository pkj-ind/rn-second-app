import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Modal } from "react-native";

export default function GoalInput(props) {
  const [enterGoal, setEnterGoal] = useState("");

  const handleChangeText = (enteredText) => {
    setEnterGoal(enteredText);
  };
  return (
    // animationType brings modal in center
    <Modal animationType="slide" visible={props.visible}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add Goales"
          style={styles.input}
          onChangeText={handleChangeText}
          value={enterGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
          <Button
            title="Add"
            onPress={props.addGoal.bind(this, enterGoal, setEnterGoal)}
          />
          </View >
          <View style={styles.button}>
          <Button title="Cancel" color="red" onPress={props.closeInputModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    // flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button:{
    width:'40%'
  }
});
