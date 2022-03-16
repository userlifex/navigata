import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Box = ({ name, color }: { name: string; color?: string }) => {
  return (
    <View style={[styles.box, { backgroundColor: color || "pink" }]}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignItems: "center",
    marginBottom: 6,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
