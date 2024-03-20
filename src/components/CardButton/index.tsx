import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

const { width, height } = Dimensions.get("window");

function index() {
  return (
    <View
      style={{
        width: "100%",
        height: height * 0.12,
        position: "absolute",
        bottom: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        style={{
          width: "90%",
          height: height * 0.055,
          backgroundColor: "#5d3ebd",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 15 }}>
          Sepete Ekle
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default index;
