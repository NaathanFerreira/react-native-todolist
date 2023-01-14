import { FlatList, Text, View } from "react-native";
import { TaskCard } from "../TaskCard";
import { styles } from "./styles";

export function Tasks({ tasks, onRemoveTask, onFinishTask }) {
  const createdTasksAmount = tasks.length;
  const finishedTasksAmount = tasks.reduce((acc, task) => {
    if (task.isFinished) {
      return ++acc;
    }
    return acc;
  }, 0);

  return (
    <>
      <View style={styles.tasksInfos}>
        <Text style={styles.createdTasks}>
          Criadas: <Text style={styles.tasksCounter}>{createdTasksAmount}</Text>
        </Text>
        <Text style={styles.finishedTasks}>
          Concluídas:{" "}
          <Text style={styles.tasksCounter}>{finishedTasksAmount}</Text>
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TaskCard
              task={item}
              onRemoveTask={onRemoveTask}
              onFinishTask={onFinishTask}
            />
          );
        }}
      />
    </>
  );
}
