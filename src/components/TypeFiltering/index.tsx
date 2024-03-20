import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { height, width } = Dimensions.get("window");

const TypeBox = ({
  setCat,
  item,
  active,
}: {
  setCat: any;
  item: string;
  active: string;
}) => {
  return (
    <TouchableOpacity
      onPress={() => setCat(item)}
      style={[
        {
          paddingHorizontal: 13,
          flexDirection: "row",
          alignItems: "center",
          height: height * 0.044,
          borderRadius: 4,
          marginRight: 5,
        },
        item === active
          ? { backgroundColor: "#5c3ebc" }
          : { borderColor: "#f0eff7", borderWidth: 1 },
      ]}
    >
      <Text
        style={[
          {
            fontSize: 12,
            fontWeight: "600",
            color: "#7849f7",
            padding: 10,
          },
          item === active && { color: "#fff" },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

function index() {
  const [category, setCategory] = useState<String>("Good Pair");
  return (
    <ScrollView
      style={{
        paddingLeft: "1%",
        width: "100%",
        height: height * 0.072,
        paddingVertical: height * 0.014,
        backgroundColor: "#fff",
        borderBottomColor: "rgba(90,90,90,.1)",
        borderBottomWidth: 4,
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map((item) => (
        <TypeBox setCat={setCategory} item={item} active={category} />
      ))}
    </ScrollView>
  );
}

export default index;
