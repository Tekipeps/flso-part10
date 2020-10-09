import React from "react";
import { View, StyleSheet } from "react-native";
import RepositoryList from "./components/RepositoryList";
import AppBar from "./components/AppBar";
import theme from "./theme";
import { Switch, Route } from "react-router-native";
import SignIn from "./components/SignIn";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'green',
    fontFamily: theme.fonts.main
  },
});

const Main = () => {
  return (
    <View styles={styles.container}>
      <AppBar />
      <Switch>
        <Route exact path='/' component={RepositoryList} />
        <Route path='/signin' component={SignIn} />
      </Switch>
    </View>
  );
};

export default Main;
