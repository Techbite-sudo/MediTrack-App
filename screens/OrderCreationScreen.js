import React, { useState } from "react";
import { View, FlatList, Button, StyleSheet } from "react-native";
import { globalStyles } from "../constants/styles";
import MedicationCard from "../components/MedicationCard";
import OrderSummary from "../components/OrderSummary";

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

const OrderCreationScreen = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectItem = (item) => {
    const existingItem = selectedItems.find((i) => i.id === item.id);
    if (existingItem) {
      setSelectedItems(
        selectedItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
  };

  const calculateTotal = () => {
    // Replace with actual pricing logic
    return selectedItems.reduce((total, item) => total + item.quantity * 10, 0);
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={dummyMedications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MedicationCard
            medication={item}
            onPress={() => handleSelectItem(item)}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
      <OrderSummary items={selectedItems} total={calculateTotal()} />
      <Button title="Place Order" onPress={() => console.log("Order placed")} />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
});

export default OrderCreationScreen;
