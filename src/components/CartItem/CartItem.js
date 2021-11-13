import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
const CartItem = () => {
    const [quantity,setQuantity] = React.useState(1)
    const quantityHandler = (operation)=>{
        switch (operation){
            case 'INCREMENT':
                setQuantity(quantity+1)
                break;
                case 'DECREMENT':
                setQuantity(quantity-1);
        }

    }
if(quantity>0)
  return (
    <View style={styles.container}>
      <Image source={{uri:'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80'}} style={styles.image} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>AKG N700CM2 Wireless Headphones</Text>
        <Text style={styles.productPrice}>$199.00(-$4.00 Tax)</Text>
        <View style={styles. productQuantity}>
            <Pressable onPress={()=>quantityHandler('DECREMENT')}>
        <AntDesign name="minuscircleo" size={24} color="grey" />
        </Pressable>
        <Text>{quantity}</Text>
            <Pressable onPress={()=>quantityHandler('INCREMENT')}>
        <AntDesign name="pluscircleo" size={24} color="grey" />
        </Pressable>
        </View>
      </View>
    </View>
  );
  return(
      <></>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal:15,
    paddingVertical:5,
  },
  productDetails:{
      padding:15,
      justifyContent:'space-between',
  },
  image:{
      width:120,
      height:120,
      borderRadius:20,
  },
  productName:{
      fontWeight:'bold',
      width:'98%',
  },
  productQuantity:{
      width:80,
      flexDirection:'row',
      alignItems: "center",
      justifyContent:'space-between'
  },
  productPrice:{
      color:'grey'
  }
});
export default CartItem;
