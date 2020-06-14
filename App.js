import React, { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";

export default function App() {
  const [goalList, setGoalList] = useState([]);

  const addGoalHandler = (enterGoal,setEnterGoal) => {
    setGoalList((goalList) => [
      ...goalList,
      { id: Math.random().toString(), value: enterGoal },
    ]);
    setEnterGoal("");
  };
  return (
    <View style={styles.screen}>
      <GoalInput addGoal={addGoalHandler} />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goalList}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
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
});
