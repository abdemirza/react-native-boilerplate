import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Button } from "react-native-paper";
import Tab from "../../components/Tab/Tab";
import { grey } from "../../constants/color";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Profile</Text>
      </View>
      <Pressable onPress={()=>navigation.navigate('Orders')}>
        <Tab
          heading="Orders"
          subHeading="Check your order status"
          iconName="cart-outline"
        />
      </Pressable>
      <Tab
        heading="Wishlist"
        subHeading="Your most loved styles"
        iconName="heart-outline"
      />
      <Tab
        heading="Address"
        subHeading="Save addresses for a hassle-free checkout"
        iconName="location-enter"
      />
      <Tab
        heading="Settings"
        subHeading="Manage notification & app settings"
        iconName="account-settings-outline"
      />
      <Tab
        heading="Profile Details"
        subHeading="Change your profile details and password"
        iconName="file-document-edit-outline"
      />
      <View style={styles.linksContainer}>
        <Text style={styles.link}>FAQs</Text>
        <Text style={styles.link}>ABOUT US</Text>
        <Text style={styles.link}>TERMS OF USE</Text>
        <Text style={styles.link}>PRIVACY POLICY</Text>
      </View>
      <View style={{ padding: 15 }}>
        <Button
          mode="outlined"
          theme={{ roundness: 3 }}
          color="red"
          style={{ borderColor: "red" }}
        >
          LOG OUT
        </Button>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  headingContainer: {
    height: 50,
    justifyContent: "center",
    padding: 15,
    backgroundColor: "#fff",
  },
  linksContainer: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 40,
    justifyContent: "space-evenly",
    height: 200,
    marginTop: 20,
  },
  heading: {
    fontWeight: "bold",
    color: grey,
  },
  link: {
    color: grey,
  },
});
export default ProfileScreen;
