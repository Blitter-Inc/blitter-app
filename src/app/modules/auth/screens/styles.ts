import { StyleSheet } from "react-native";
import { ACCENT, FONT } from "$config/theme/color";


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
    color: ACCENT[2],
    fontWeight: "bold",
    margin: 5,
  },
  smallText: {
    fontSize: 12,
    color: FONT.SUBTEXT[1],
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
    color: FONT.INPUT[1],
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
