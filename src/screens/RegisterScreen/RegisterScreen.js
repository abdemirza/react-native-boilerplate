import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomTextInput from "../../components/CustomTextInput/CustomTextInput";
import {
  background,
  button,
  buttonText,
  headline,
  primary,
} from "../../constants/color";
import facebook from "../../assets/images/facebook.png";
import { useNavigation } from "@react-navigation/core";
import axiosInstance from "../../helpers/axiosInstance";
const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigator = useNavigation();
  
  return (
    <View style={styles.container}>
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
        onChangeText={value => setEmail(value)}

      />
      <CustomTextInput
        label="Password"
        placeholder="Enter password"
        mode="outlined"
        secureTextEntry={true}
        onChangeText={value => setPassword(value)}
      />
      <CustomTextInput
        label="Confirm Password"
        placeholder="Confirm password"
        mode="outlined"
        secureTextEntry={true}
        onChangeText={value => setConfirmPassword(value)}
      />

      <CustomButton mode="contained" onPress={() => console.warn("hello")}>
        Sign Up
      </CustomButton>
      <View style={styles.linkContainer}>
        <Text>Already a member?</Text>
        <Pressable onPress={() => navigator.navigate("Login")}>
          <Text style={styles.link}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: "15%",
    height: "100%",
    backgroundColor: background,
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    maxWidth: 165,
    width: "50%",
  },
  link: {
    color: "blue",
  },
});
export default RegisterScreen;
