import React, { useState } from "react";
import {
  StyleSheet,
  Alert,
  Keyboard,
  TextInput,
  Button,
  View,
} from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (value) => {
    setText(value);
  };

  const submitButtonHandler = (text) => {
    Keyboard.dismiss();
    if (text.length > 3) {
      submitHandler(text);
      setText("");
    } else {
      Alert.alert("OOPS!", "Todo item must be over 3 chars long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New todo..."
        onChangeText={changeHandler}
        value={text}
      />

      <Button
        onPress={() => {
          submitButtonHandler(text);
        }}
        title="Add Todo"
        color="purple"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
