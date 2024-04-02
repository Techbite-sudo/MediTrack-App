// MedicationListScreen.js
import React from "react";
import { View, FlatList, Button, StyleSheet } from "react-native";
import { globalStyles } from "../constants/styles";
import MedicationCard from "../components/MedicationCard";
import { useNavigation } from "@react-navigation/native";

// Dummy data for medications
const dummyMedications = [
  {
    id: 1,
    name: "Medication 1",
    description: "This is a description for Medication 1.",
    stock: 50,
  },
  {
    id: 2,
    name: "Medication 2",
    description: "This is a description for Medication 2.",
    stock: 20,
  },
  // Add more dummy medications as needed
];

const MedicationListScreen = () => {
  const navigation = useNavigation();

  const handleOrderMedication = () => {
    // Navigate to the order creation screen
    navigation.navigate("OrderCreation");
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={dummyMedications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MedicationCard medication={item} />}
        contentContainerStyle={styles.listContainer}
      />
      <Button
        title="Order Medication"
        onPress={handleOrderMedication}
        color="#007AFF"
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  button: {
    marginTop: 20,
    borderRadius: 5,
  },
});

export default MedicationListScreen;
