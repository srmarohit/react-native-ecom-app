import { Dimensions, StyleSheet } from "react-native";
import COLORS from "../../../const/colors";
import pt from "../../../const/units";

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20 * pt,
    height: height / 3.4,
    backgroundColor: COLORS.tranparent,
  },

  total: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    borderColor: COLORS.white,
    borderTopWidth: 2 * pt,
    paddingHorizontal: 20 * pt,
  },

  text: {
    fontSize: 15 * pt,
    fontWeight: "bold",
    color: COLORS.dark,
    marginRight: 10 * pt,
  },

  value: {
    fontSize: 22 * pt,
    fontWeight: "700",
    color: COLORS.primary,
  },
});

export default styles;
