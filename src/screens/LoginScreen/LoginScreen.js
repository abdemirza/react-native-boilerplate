import React from "react";
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
const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", padding: 10 }}>
        <Image
          size={25}
          style={{ height: 65, width: 65, marginVertical: 20 }}
          source={facebook}
        />
        <Text style={{ fontWeight: "bold", fontSize: 30, color: headline }}>
          Login
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
        secureTextEntry={true}
      />

      <CustomButton mode="contained" onPress={() => navigation.navigate('Cart')}>
        Login
      </CustomButton>
      <View style={styles.linkContainer}>
        <Text>Not a member?</Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={styles.link}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
export default LoginScreen;
