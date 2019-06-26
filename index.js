/**
 * @format
 */

import React from "react";
import { AppRegistry, Text } from "react-native";

//components:
import Header from "./src/components/Header";

const App = () => (
  <div>
    <Header />
    <Text>Title of the App</Text>
  </div>
);

AppRegistry.registerComponent("albums", () => App);

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
