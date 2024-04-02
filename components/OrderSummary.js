import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PRIMARY_COLOR, TEXT_COLOR } from "../constants/colors";

const OrderSummary = ({ items, total }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Order Summary</Text>
      {items.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemQuantity}>x {item.quantity}</Text>
        </View>
      ))}
      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.totalValue}>{total}</Text>
      </View>
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
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: PRIMARY_COLOR,
    marginBottom: 12,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  itemName: {
    fontSize: 16,
    color: TEXT_COLOR,
  },
  itemQuantity: {
    fontSize: 16,
    color: TEXT_COLOR,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: TEXT_COLOR,
  },
  totalValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: PRIMARY_COLOR,
  },
});

export default OrderSummary;
