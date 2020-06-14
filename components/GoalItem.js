import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.listItems}>
      <Text>{props.title}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItems: {
    padding: 5,
    borderRadius: 4,
    backgroundColor: "#ccc",
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 5,
  },
});
