import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete} onLongPress={props.onLongPress} activeOpacity={0.7}>
    <View style={styles.listItems}>
      <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>
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
