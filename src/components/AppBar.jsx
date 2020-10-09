import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import Text from "./Text";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
      <Link to='/signin'>
        <Text style={styles.text}>Sign In</Text>      
      </Link>
    </View>
  );
};

export default AppBar;
