import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MedicationListScreen from "../screens/MedicationListScreen";
import OrderCreationScreen from "../screens/OrderCreationScreen";
import OrderHistoryScreen from "../screens/OrderHistoryScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MedicationList" component={MedicationListScreen} />
      <Stack.Screen name="OrderCreation" component={OrderCreationScreen} />
      <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
