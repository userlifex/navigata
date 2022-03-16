import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Box } from "./components/Box/Box";
import { MainRouter } from "./Router/MainRouter";

const boxes = [
  { name: "red", color: "red" },
  { name: "green", color: "green" },
  { name: "blue", color: "blue" },
  { name: "black", color: "black" },
  { name: "pink" },
];

export const Main = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <MainRouter />
      </NavigationContainer>
    </SafeAreaView>
  );
};
