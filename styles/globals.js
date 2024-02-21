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
    marginBottom: 20,
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
  productContainer: {
    rowGap: 20,
    width: "100%",
  },
  productItem: {
    backgroundColor: "#deaacc",
    borderWidth: 1,
    borderColor: "#eeeeee",
    borderStyle: "solid",
    padding: 10,
    borderRadius: 5,
    flexGrow: 1,
    height: 80,
    justifyContent: "center",
  },
  textTitle: {
    fontSize: 40,
    fontWeight: "500",
  },
  textWhite: {
    color: "white",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  modalContent: {
    borderRadius: 10,
    width: "85%",
    overflow: "hidden",
    backgroundColor: "white",
  },

  modalHeader: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderBottomColor: "#eded",
    borderBottomWidth: 1,
    color: "white",
    fontWeight: "600",
  },
  modalBody: {
    padding: 20,
    height: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  pressableButton: {
    backgroundColor: "#20b2aa",
    padding: 10,
    text: {
      color: "#fff",
      textAlign: "center",
      fontWeight: "500",
      textTransform: "uppercase",
    },
  },
});

export default styles;
