import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appbar,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    margin: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <Text style={styles.text}>Repositories</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AppBar;
