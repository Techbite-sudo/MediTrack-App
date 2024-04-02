import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { globalStyles } from "../constants/styles";
import MedicationCard from "../components/MedicationCard";

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
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={dummyMedications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MedicationCard medication={item} />}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
});

export default MedicationListScreen;
