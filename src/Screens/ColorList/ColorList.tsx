import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { Box } from "../../components/Box/Box";

const boxes = [
  { name: "red", color: "red" },
  { name: "green", color: "green" },
  { name: "blue", color: "blue" },
  { name: "black", color: "black" },
  { name: "pink" },
];

export const ColorList = () => (
  <SafeAreaView>
    <FlatList
      keyExtractor={(item, index) => "" + index}
      data={boxes}
      renderItem={({ item }) => <Box name={item.name} color={item.color} />}
    />
  </SafeAreaView>
);
