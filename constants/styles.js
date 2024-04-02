import { StyleSheet } from "react-native";
import { BACKGROUND_COLOR, TEXT_COLOR } from "../constants/colors";


export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: TEXT_COLOR,
    marginVertical: 12,
  },
  // Add more global styles as needed
}); 
