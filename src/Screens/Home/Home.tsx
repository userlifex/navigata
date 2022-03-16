import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const NavigatorButton = ({ label, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      width: 120,
      paddingVertical: 12,
      paddingHorizontal: 8,
      backgroundColor: "gold",
      borderRadius: 12,
    }}
  >
    <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>
      {label}
    </Text>
  </TouchableOpacity>
);

export const Home = ({ navigation }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      flex: 1,
    }}
  >
    <NavigatorButton
      label="About"
      onPress={() => navigation.navigate("About")}
    />
    <NavigatorButton
      label="ColorList"
      onPress={() => navigation.navigate("ColorList")}
    />
  </View>
);
