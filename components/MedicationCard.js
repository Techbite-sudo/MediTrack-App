import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PRIMARY_COLOR, TEXT_COLOR } from "../constants/colors";

const MedicationCard = ({ medication }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{medication.name}</Text>
      <Text style={styles.description}>{medication.description}</Text>
      <Text style={styles.stock}>Stock: {medication.stock}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: PRIMARY_COLOR,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: TEXT_COLOR,
    marginBottom: 8,
  },
  stock: {
    fontSize: 14,
    color: TEXT_COLOR,
  },
});

export default MedicationCard;
