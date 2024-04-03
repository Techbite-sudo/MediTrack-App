// MedicationListScreen.js
import React from "react";
import { View, FlatList, Button, StyleSheet } from "react-native";
import { globalStyles } from "../constants/styles";
import MedicationCard from "../components/MedicationCard";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from '@apollo/client';
import { GET_MEDICATIONS } from './graphql/queries';

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
  const { loading, error, data } = useQuery(GET_MEDICATIONS);

  const handleOrderMedication = () => {
    // Navigate to the order creation screen
    navigation.navigate("OrderCreation");
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={globalStyles.container}>
      {/* <FlatList
        data={data.medications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MedicationCard medication={item} />}
      /> */}
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
