import React from "react";
import { Text, View } from "react-native";

const Header = props => {
  const { textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Album Name</Text>
    </View>
  );
};

export default Header;

const styles = {
  viewStyle: {
    backgroundColor: "f7f7f7"
  },
  textStyle: {
    fontSize: 20
  }
};
