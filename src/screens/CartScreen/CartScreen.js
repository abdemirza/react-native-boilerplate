import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CartItem from '../../components/CartItem/CartItem'
import CustomHeader from '../../components/CustomHeader/CustomHeader'
import { primary } from '../../constants/color';

  
const CartScreen = () => {
    return (
        <View style={styles.container}>
            <CustomHeader title="Cart" />
            <CartItem />
            <CartItem />
            <CartItem />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height:"100%",
        backgroundColor:primary
    }
})

export default CartScreen
