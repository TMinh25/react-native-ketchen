import React from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { theme } from "../core/theme";

export default function Button({ mode = "outlined", style, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === "outlined" && {
          backgroundColor: theme.colors.surface,
          color: theme.colors.text,
        },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: 10,
    paddingVertical: 2,
    borderRadius: 100,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
  },
});
