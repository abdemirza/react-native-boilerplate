import { useSelector } from "react-redux";

const cart = ()=>{

     const cart =  useSelector((state)=> state.cart)
     return cart;
}