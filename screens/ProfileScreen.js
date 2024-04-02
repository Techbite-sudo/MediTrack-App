import React, { useState } from "react";
import { View } from "react-native";
import { globalStyles } from "../constants/styles";
import ProfileForm from "../components/ProfileForm";

const dummyUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "1234567890",
  address: "123 Main Street, Anytown USA",
};

const ProfileScreen = () => {
  const [user, setUser] = useState(dummyUser);

  const handleSaveProfile = (updatedUser) => {
    setUser(updatedUser);
    console.log("Updated user:", updatedUser);
    // Here, you can implement the logic to save the updated user data to the backend
  };

  return (
    <View style={globalStyles.container}>
      <ProfileForm user={user} onSave={handleSaveProfile} />
    </View>
  );
};

export default ProfileScreen;
