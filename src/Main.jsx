import React from "react";
import { View, StyleSheet } from "react-native";
import RepositoryList from "./components/RepositoryList";
import AppBar from "./components/AppBar";
import theme from "./theme";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.backgroundColor,
  },
});

const Main = () => {
  return (
    <View styles={styles.container}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;
