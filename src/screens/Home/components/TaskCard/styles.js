import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "#262626",
    borderWidth: 1,
    height: 64,
    borderColor: "#333333",
    borderRadius: 8,
    padding: 12,
    alignItems: 'center'
  },
  cardText: {
    flex: 1,
    color: "#FFF",
    marginRight: 20
  },
  deleteButton: {
    width: 32,
    height: 32,
    borderRadius: 5,
    backgroundColor: "#E23C44",
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButtonText: {
    color: "#FFF",
    fontSize: 20
  }
})