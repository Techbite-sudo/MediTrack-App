import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { globalStyles } from "../constants/styles";

const AuthForm = ({ isLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // Handle authentication logic here
    console.log("Email:", email, "Password:", password);
  };

  return (
    <View style={[globalStyles.container, styles.formContainer]}>
      <Text style={[globalStyles.heading, styles.heading]}>
        {isLogin ? "Login" : "Register"}
      </Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholderTextColor="#999"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        placeholderTextColor="#999"
      />
      <Button
        title={isLogin ? "Login" : "Register"}
        onPress={handleSubmit}
        color="#007AFF"
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
    borderRadius: 5,
  },
});

export default AuthForm;
