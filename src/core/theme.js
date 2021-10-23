import { StyleSheet } from "react-native";
import { DefaultTheme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: "#FFFFFF",
    primary: "#DB781D",
    surface: "#DB781D",
    secondary: "#414757",
    error: "#f13a59",
  },
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerNoCenter: {
    flex: 1,
  },
  slide: {
    flex: 1,
    padding: 20,
  },
});
