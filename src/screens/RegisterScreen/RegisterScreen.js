import React from "react";
import { View, Text, ScrollView, Image, Pressable, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomTextInput from "../../components/CustomTextInput/CustomTextInput";
import { button, buttonText, headline, primary } from "../../constants/color";
import facebook from "../../assets/images/facebook.png";
const RegisterScreen = () => {
  return (
    <View style={{ padding: 20, marginTop: "15%", height: "100%" }}>
      <View style={{ alignItems: "center", padding: 10 }}>
        <Image
          size={25}
          style={{ height: 65, width: 65, marginVertical: 20 }}
          source={facebook}
        />
        <Text style={{ fontWeight: "bold", fontSize: 30, color: headline }}>
          Create Account
        </Text>
      </View>
      <CustomTextInput
        label="Email"
        placeholder="Enter your email"
        mode="outlined"
      />
      <CustomTextInput
        label="Password"
        placeholder="Enter password"
        mode="outlined"
      />
      <CustomTextInput
        label="Confirm Password"
        placeholder="Confirm password"
        mode="outlined"
      />

      <CustomButton mode="contained" onPress={() => console.warn("hello")}>
        Sign Up
      </CustomButton>
      <View style={styles.linkContainer}>
        <Text>Already a member?</Text>
        <Pressable onPress={() => console.warn("hello")}>
          <Text style={styles.link}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    linkContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        maxWidth: 165,
        width: '50%',
        
    },
    link:{
        color:'blue'
    }
})
export default RegisterScreen;
