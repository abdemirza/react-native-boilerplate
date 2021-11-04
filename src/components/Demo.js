import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import axiosInstance from "../helpers/axiosInstance";

const Demo = () => {
  const state = useSelector((state) => state);
  React.useEffect(() => {
    axiosInstance.post("/emailAvailability",{email:'helloWOrld'}).then((response) => console.log(response)).catch((err) => console.error(err));
  });
  return (
    <View>
      <Text>Demo</Text>
    </View>
  );
};

export default Demo;
