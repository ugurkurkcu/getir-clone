import React from "react";
import { View, Text } from "react-native";
import ProductItem from "../ProductItem";
import productsGetir from "../../../assets/productsGetir";

function index() {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#fff",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {productsGetir.slice(0, 2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
      <Text
        style={{
          color: "#7a7a7a",
          fontWeight: "bold",
          padding: 14,
        }}
      >
        Birlikte iyi gider
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          flex: 1,
          backgroundColor: "#fff",
          paddingVertical: 10,
          alignItems: "center",
        }}
      >
        {productsGetir.slice(2).map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}

export default index;
