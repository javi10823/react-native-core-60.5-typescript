import { StyleSheet } from "react-native";

import { theme } from "../utils/Colors";
import * as Dimensions from "../utils/dimensions";

export const styles = StyleSheet.create({
  headerStyle: {
    borderBottomWidth: 0,
    backgroundColor: theme.global.white
  },
  headerTitle: {
    color: theme.global.black,
    marginBottom: Dimensions.responsiveSize(5),
    fontSize: 18,
    fontWeight: "300",
    fontFamily: "nunito-bold"
  }
});
