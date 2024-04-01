import React from "react";
import { View } from "react-native";
import AuthForm from "../components/AuthForm";

const AuthScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <AuthForm isLogin />
    </View>
  );
};

export default AuthScreen;
