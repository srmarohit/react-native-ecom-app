import { StyleSheet } from "react-native";
import COLORS from "../../const/colors";
import pt from "../../const/units";

const styles = StyleSheet.create({
  priceContainer: {
    paddingVertical: 15 * pt,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    color: COLORS.yellow,
    fontWeight: "bold",
    fontSize: 25 * pt,
  },
  // style cart container
  cartBtnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 7 * pt,
    paddingVertical: 15 * pt,
  },

  iconContainer: {
    height: 50 * pt,
    width: 50 * pt,
    elevation: 7,
    marginRight: 30 * pt,
    borderRadius: 25 * pt,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },

  addToCart: {
    flex: 1,
    backgroundColor: COLORS.dark,
    color: COLORS.light,
    fontWeight: "bold",
    borderRadius: 10 * pt,
    fontSize: 20 * pt,
    paddingVertical: 10 * pt,
    textAlign: "center",
  },
});

export default styles;
