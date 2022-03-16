import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../Screens/Home/Home";
import { ColorList } from "../Screens/ColorList/ColorList";
import { About } from "../Screens/About/About";

const Stack = createNativeStackNavigator();

export const MainRouter = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="About" component={About} />
    <Stack.Screen name="ColorList" component={ColorList} />
  </Stack.Navigator>
);
