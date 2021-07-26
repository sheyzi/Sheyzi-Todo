import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingTop: 20,
    marginTop: 40,
    backgroundColor: "#ddd",
  },

  boxOne: {
    flex: 1,
    backgroundColor: "violet",
    padding: 10,
    color: "#fff",
  },

  boxTwo: {
    flex: 1,
    backgroundColor: "gold",
    padding: 20,
    color: "#fff",
  },

  boxThree: {
    flex: 1,
    backgroundColor: "coral",
    padding: 30,
    color: "#fff",
  },

  boxFour: {
    flex: 1,
    backgroundColor: "skyblue",
    padding: 40,
    color: "#fff",
  },
});
