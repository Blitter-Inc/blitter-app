import { StyleSheet } from "react-native";


export default StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  button: {
    margin: 5,
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
  },
  bigText: {
    fontSize: 25,
    color: "#065A82",
    fontWeight: "bold",
    margin: 5,
  },
  smallText: {
    fontSize: 12,
    color: "grey",
    marginHorizontal: 5,
  },
  otpContainer: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  otpContainerStyle: {
    flexDirection: "row",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginRight: 12,
    flex: 1,
  },
  otpTextInputStyle: {
    color: "#087aaf",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    height: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
