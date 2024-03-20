import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";
import { Entypo } from "@expo/vector-icons";

function index() {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/Home-icon.png",
          }}
        />
        <View style={styles.headerOneView}>
          <Text style={{ fontWeight: "600", fontSize: 16 }}>Ev</Text>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 12,
              color: "#6e7480",
              marginHorizontal: 3,
            }}
            numberOfLines={1}
          >
            Cumhuriyet, 1995. Sk. No:1/3 Esen...
          </Text>
          <Entypo name="chevron-right" size={22} color="#5d3ebd" />
        </View>
        <View style={styles.headerTwo}>
          <Text style={{ fontSize: 10, fontWeight: "bold", color: "#5d3ebd" }}>
            TVS
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#5d3ebd" }}>
            13<Text style={{ fontSize: 16 }}>dk</Text>
          </Text>
        </View>
      </View>
      <View></View>
    </View>
  );
}

export default index;
