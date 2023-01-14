import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tasksInfos: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "#333333",
    paddingBottom: 15
  },
  createdTasks: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "700"
  },
  finishedTasks: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "700"
  },
  tasksCounter: {
    color: "#FFF",
  },
})