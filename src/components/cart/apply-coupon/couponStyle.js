import { Dimensions, StyleSheet } from "react-native";
import COLORS from "../../../const/colors";
import pt from "../../../const/units";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 22 * pt,
    marginVertical: 5 * pt,
    elevation: 4,
  },

  text: {
    fontSize: 15 * pt,
  },

  inputWrapper: {
    flexDirection: "row",
    marginTop: 5 * pt,
  },

  input: {
    flex: 1,
    marginRight: 12 * pt,
    borderBottomWidth: 1 * pt,
    borderColor: COLORS.dark,
  },

  btn: {
    fontWeight: "700",
    borderRadius: 5 * pt,
    paddingHorizontal: 20 * pt,
  },
});

export default styles;
