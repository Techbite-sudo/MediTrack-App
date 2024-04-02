import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { PRIMARY_COLOR, TEXT_COLOR } from "../constants/colors";

const ProfileForm = ({ user, onSave }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);

  const handleSave = () => {
    const updatedUser = { name, email, phone, address };
    onSave(updatedUser);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
      />
      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Enter your address"
        multiline
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: PRIMARY_COLOR,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    fontSize: 16,
    color: TEXT_COLOR,
  },
});

export default ProfileForm;
