import { StyleSheet } from "react-native";
import pt from "../../const/units";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  headerTitle: {
    fontSize: 35 * pt,
    fontWeight: "bold",
    width: "75%",
    lineHeight: 40 * pt,
    marginHorizontal: "auto",
    paddingLeft: 40 * pt,
    paddingBottom: 25 * pt,
  },
});
