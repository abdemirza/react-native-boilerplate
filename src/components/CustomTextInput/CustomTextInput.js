import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { primary, stroke } from "../../constants/color";

const CustomTextInput = (props) => {
  return (
    <View style={{paddingVertical:5}}>
      <TextInput  activeOutlineColor={stroke}  style={{ height: 50,backgroundColor:primary }} {...props} />
    </View>
  );
};

export default CustomTextInput;
