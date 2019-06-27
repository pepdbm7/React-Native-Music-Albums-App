import React from "react";
import { AppRegistry, Text } from "react-native";

//components:
import Header from "./src/components/Header";

const App = () => (
  <View>
    <Header headerText={"Albums"} />
  </View>
);

AppRegistry.registerComponent("albums", () => App);
