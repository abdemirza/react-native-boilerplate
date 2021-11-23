import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button, TextInput } from "react-native-paper";
import { height, inputHeight } from "../../constants/dimensions";
import { grey } from "../../constants/color";
import { useNavigation } from "@react-navigation/core";
const MyDetailsScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView style={{ backgroundColor: "#fff", height: height - 140 }}>
        <View style={{ height: 200 }}>
          <Image
            style={styles.image}
            source={{
              uri: "https://images.unsplash.com/photo-1637506235815-01d9d777592e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=984&q=80",
            }}
          />
          <Pressable style={styles.backButton} onPress={() => navigation.pop()}>
            <MaterialCommunityIcons
              name="arrow-left"
              size={30}
              color="#fff"
            />
          </Pressable>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              backgroundColor: "#fff",
              padding: 3,
            }}
          >
            <Icon name="pencil" size={20} color="#000" />
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>A</Text>
            <View style={styles.iconContainer}>
              <Icon name="pencil" size={20} color="#000" />
            </View>
          </View>
        </View>
        <View
          style={{
            marginVertical: 50,
            paddingHorizontal: 20,
            justifyContent: "space-evenly",
          }}
        >
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value="Hello World"
            label="Full Name"
            mode="outlined"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            label="Email"
            value="hello@gmail.com"
            mode="outlined"
          />
          <TextInput
            style={styles.input}
            placeholder="Birthday"
            label="Birthday"
            value="9 February 1998"
            mode="outlined"
          />
          <TextInput
            style={styles.input}
            placeholder="Location"
            label="Location"
            mode="outlined"
          />
          <Button
            uppercase
            mode="contained"
            style={{
              backgroundColor: "transparent",
              borderColor: grey,
              borderWidth: 0.2,
              marginVertical: 8,
            }}
            labelStyle={{ color: "#000" }}
          >
            Change Password
          </Button>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button uppercase mode="contained">
          save details
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 100,
    alignSelf: "center",
  },
  avatarText: {
    fontSize: 80,
    color: "#fff",
  },
  iconContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#fff",
    marginHorizontal: 5,
    padding: 3,
  },
  input: {
    height: inputHeight,
    marginVertical: 8,
  },
  footer: {
    height: 100,
    bottom: 0,
    padding: 20,
    backgroundColor: "#fff",
    borderTopColor: grey,
    borderWidth: 0.5,
  },
  backButton: {
    position: "absolute",
    padding: 10,
  },
});
export default MyDetailsScreen;
