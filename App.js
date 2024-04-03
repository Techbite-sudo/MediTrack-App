import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import { ApolloProvider } from "@apollo/client";
import client from "./utils/graphql";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AppNavigator />;
    </ApolloProvider>
  );
}
