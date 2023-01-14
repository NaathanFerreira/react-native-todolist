import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    marginRight: 10,
    backgroundColor: "#262626",
    height: 54,
    borderWidth: 1,
    borderRadius: 6,
    padding: 16,
    color: "#F2F2F2",
  },
  addButton: {
    backgroundColor: "#1E6F9F",
    justifyContent: "center",
    alignItems: "center",
    width: 51,
    height: 52,
    borderRadius: 6
  },
  addButtonText: {
    fontSize: 20,
    color: "#FFF",
  }
})