import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { globalStyles } from "../constants/styles";
import OrderCard from "../components/OrderCard";

const dummyOrders = [
  {
    id: 1,
    date: "2023-05-01",
    items: [
      { id: 1, name: "Medication 1", quantity: 2 },
      { id: 2, name: "Medication 2", quantity: 1 },
    ],
    total: 100,
  },
  {
    id: 2,
    date: "2023-04-15",
    items: [{ id: 1, name: "Medication 1", quantity: 1 }],
    total: 50,
  },
  // Add more dummy orders as needed
];

const OrderHistoryScreen = () => {
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={dummyOrders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <OrderCard order={item} />}
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

export default OrderHistoryScreen;
