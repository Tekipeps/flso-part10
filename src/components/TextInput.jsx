import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.error,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = () => (error ? [style, styles.container] : [style]);

  return <NativeTextInput style={textInputStyle()} {...props} />;
};

export default TextInput;
