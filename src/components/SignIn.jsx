import React from "react";
import { View, TouchableWithoutFeedback, StyleSheet } from "react-native";
import theme from "../theme";
import Text from "./Text";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // justifyContent: "center",
    // alignItems: 'center'
  },
  submit: {
    flexDirection: "row",
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <View style={styles.submit}>
          <Text>Submit</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const SignIn = () => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
