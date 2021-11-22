import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { grey } from "../../constants/color";

const PaymentCardTab = ({ title, iconName }) => {
  const [open, setOpen] = React.useState(false);
  const pressHandler = () => {
    setOpen(!open);
  };
  return (
    <View style={open ? styles.shadowProp : {}}>
      <Pressable onPress={() => pressHandler()}>
        <View
          style={[
            styles.container,
            { borderColor: open ? "transparent" : grey },
          ]}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon style={styles.icon} name={iconName} size={25} />
            <Text style={styles.text}>{title}</Text>
          </View>
          <Icon name={open ? "chevron-up" : "chevron-down"} size={25} />
        </View>
      </Pressable>

      {open && (
        <View style={[styles.container, { flexDirection: "column" }]}>
          <TextInput
            activeOutlineColor="#000"
            style={styles.input}
            mode="outlined"
            placeholder="Card Number"
            right={<TextInput.Icon name="credit-card-outline" />}
            label="Card Number"
          />
          <TextInput
            activeOutlineColor="#000"
            style={styles.input}
            mode="outlined"
            placeholder="Card Number"
            label="Name on card"
          />
          <View style={{ flexDirection: "row"}}>
            <TextInput
              activeOutlineColor="#000"
              style={[styles.input, { width: "55%" ,marginHorizontal: "5%"}]}
              mode="outlined"
              placeholder="Card Number"
              label="Valid Thru (MM/YY)"
            />
            <TextInput
              activeOutlineColor="#000"
              style={[styles.input, { width: "35%",marginHorizontal: "5%"}]}
              mode="outlined"
            right={<TextInput.Icon name="information-outline" />}
            placeholder="CVV"
              label="CVV"
            />
          </View>
        </View>
      )}
    </View>
  );
};
const PaymentCard = () => {
  return (
    <View>
      <PaymentCardTab iconName="cash-100" title="Cash On Delivery" />
      <PaymentCardTab
        iconName="credit-card-outline"
        title="Credit/Debit Card"
      />
      <PaymentCardTab iconName="wallet-outline" title="Paytm/Payzap/Wallets" />
      <PaymentCardTab iconName="bank" title="Net Banking" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderColor: grey,
  },
  icon: {
    paddingHorizontal: 5,
  },
  text: {
    fontWeight: "600",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginVertical: 10,
  },
  input: {
    width: "100%",
    height: 45,
    marginVertical: 5,
    justifyContent:'center',
  },
});
export default PaymentCard;
