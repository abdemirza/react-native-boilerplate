import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { button, buttonText } from "../../constants/color";

const CustomButton = (props) => {
  return (
    <View style={{paddingVertical:15}}>
      <Button style={props.mode==='contained'?{ backgroundColor: button }:{}} color={buttonText} {...props}>
        {props.children}
      </Button>
    </View>
  );
};

export default CustomButton;
