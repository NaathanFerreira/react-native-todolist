import { Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "./styles";

export function TaskCard({ task, onRemoveTask, onFinishTask }) {
  return (
    <View style={styles.card}>
      <BouncyCheckbox
        disabled={task.isFinished}
        size={25}
        fillColor="#0063BF"
        unfillColor="transparent"
        innerIconStyle={{ borderWidth: 2 }}
        onPress={(isChecked) => {
          if (isChecked) onFinishTask(task.id);
        }}
      />
      <Text
        style={{
          ...styles.cardText,
          textDecorationLine: task.isFinished ? "line-through" : "none",
          color: task.isFinished ? "#808080" : "#FFF",
        }}
        numberOfLines={2}
      >
        {task.taskName}
      </Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onRemoveTask(task.id)}
      >
        <Text style={styles.deleteButtonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
