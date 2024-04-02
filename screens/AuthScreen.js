import React from "react";
import { View, Text } from "react-native";
import AuthForm from "../components/AuthForm";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const AuthScreen = () => {
  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={{ flex: 1 }}>
      <AuthForm isLogin />
      <TouchableOpacity onPress={handleRegister}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthScreen;
