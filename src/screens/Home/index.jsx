import { useState } from "react";
import { Alert, View } from "react-native";
import { Header } from "../../components/Header";
import { Form } from "./components/Form";
import { Tasks } from "./components/Tasks";
import { styles } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState([]);

  function handleAddNewTask(taskName) {
    const newTask = {
      id: "id" + new Date().getTime(),
      taskName,
      isFinished: false,
    };
    setTasks((prevState) => [...prevState, newTask]);
  }

  function handleRemoveTask(taskId) {
    const taskToRemove = tasks.find((task) => task.id === taskId);
    console.log(taskToRemove);
    Alert.alert(
      "Remover",
      `Deseja remover a tarefa: [${taskToRemove.taskName}] ?`,
      [
        {
          text: "Sim",
          onPress: () =>
            setTasks((prevState) =>
              prevState.filter((task) => task.id !== taskId)
            ),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  }

  function handleMarkTaskAsFinished(taskId) {
    const newTasksList = [...tasks];
    const taskToFinish = newTasksList.find((task) => task.id === taskId);
    taskToFinish.isFinished = true;
    setTasks(newTasksList);
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <Form onAddNewTask={handleAddNewTask} />
        <Tasks
          tasks={tasks}
          onRemoveTask={handleRemoveTask}
          onFinishTask={handleMarkTaskAsFinished}
        />
      </View>
    </View>
  );
}
