import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Form({ onAddNewTask }) {
  const [isTextInputFocused, setIsTextInputFocused] = useState(false);
  const [task, setTask] = useState("");

  return (
    <View style={styles.form}>
      <TextInput
        onFocus={() => setIsTextInputFocused(true)}
        onBlur={() => setIsTextInputFocused(false)}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        style={{
          ...styles.input,
          borderColor: isTextInputFocused ? "#5E60CE" : "#0D0D0D",
        }}
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          setTask("");
          onAddNewTask(task);
        }}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
