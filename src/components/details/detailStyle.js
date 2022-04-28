import { StyleSheet } from "react-native";
import pt from "../../const/units";

const styles = StyleSheet.create({
  title: {
    fontSize: 22 * pt,
    fontWeight: "bold",
    marginBottom: 15 * pt,
  },

  descHeader: {
    fontWeight: "bold",
    fontSize: 15 * pt,
    marginBottom: 5 * pt,
  },

  description: {
    fontSize: 12 * pt,
    fontWeight: "500",
    lineHeight: 16 * pt,
  },
});

export default styles;
