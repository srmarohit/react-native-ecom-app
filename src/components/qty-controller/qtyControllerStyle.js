import { StyleSheet } from "react-native";
import COLORS from "../../const/colors";
import pt from "../../const/units";

const styles = StyleSheet.create({
  qtyController: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.dark,
    paddingVertical: 5 * pt,
    paddingHorizontal: 10 * pt,
    borderTopLeftRadius: 10 * pt,
    borderBottomRightRadius: 10 * pt,
  },

  qtyInc: {
    paddingHorizontal: 5 * pt,
    borderRadius: 5 * pt,
    backgroundColor: COLORS.light,
    color: COLORS.dark,
    fontSize: 15 * pt,
    fontWeight: "bold",
    marginRight: 7 * pt,
  },

  qty: {
    fontWeight: "bold",
    fontSize: 15 * pt,
    marginHorizontal: 10 * pt,
    color: COLORS.light,
  },

  qtyDec: {
    paddingHorizontal: 5 * pt,
    borderRadius: 5 * pt,
    backgroundColor: COLORS.light,
    color: COLORS.dark,
    fontSize: 15 * pt,
    fontWeight: "bold",
    marginLeft: 7 * pt,
  },
});

export default styles;
