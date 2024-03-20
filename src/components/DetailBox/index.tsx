import React from "react";
import { View, Text } from "react-native";
import productsGetir from "../../../assets/productsGetir";

type DetailBoxPropsType = {
  price: number;
  name: string;
  quantity: string;
};

function index({ price, name, quantity }: DetailBoxPropsType) {
  return (
    <View style={{ width: "100%", backgroundColor: "#fff",alignItems: 'center',gap:6, paddingVertical:15 }}>
      <Text style={{color:"#5d3ebd", fontWeight:"bold", fontSize:20,paddingBottom:12}}>{"\u20ba"}{price}</Text>
      <Text style={{color:"#000",fontWeight:"600", fontSize:16}}>{name}</Text>
      <Text style={{color:"#848897",fontWeight:"600", fontSize:14}}>{quantity}</Text>
    </View>
  );
}

export default index;
