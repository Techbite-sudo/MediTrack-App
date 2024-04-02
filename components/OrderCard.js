import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PRIMARY_COLOR, TEXT_COLOR } from "../constants/colors";

const OrderCard = ({ order }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>Order Date: {order.date}</Text>
      <Text style={styles.items}>Items:</Text>
      {order.items.map((item) => (
        <Text key={item.id} style={styles.item}>
          {item.name} x {item.quantity}
        </Text>
      ))}
      <Text style={styles.total}>Total: {order.total}</Text>
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
  date: {
    fontSize: 16,
    fontWeight: "bold",
    color: PRIMARY_COLOR,
    marginBottom: 8,
  },
  items: {
    fontSize: 16,
    fontWeight: "bold",
    color: TEXT_COLOR,
    marginBottom: 8,
  },
  item: {
    fontSize: 14,
    color: TEXT_COLOR,
    marginLeft: 16,
  },
  total: {
    fontSize: 16,
    fontWeight: "bold",
    color: TEXT_COLOR,
    marginTop: 8,
  },
});

export default OrderCard;
