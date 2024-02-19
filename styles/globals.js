import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
  },

  blockContent: {
    width: "100%",
    display: "flex",
    gap: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  viewText: {
    paddingBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eeeeee",
    borderStyle: "solid",
    padding: 10,
    borderRadius: 5,
    flexGrow: 1,
  },
  textTitle: {
    fontSize: 40,
    fontWeight: "500",
  },
});

export default styles;
