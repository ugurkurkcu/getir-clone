import React, { useState } from "react";
import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

function index() {
  const [details, setDetails] = useState<string[]>([
    "Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti",
    "İçindekiler",
    "Besin Değerleri",
    "Kullanım",
    "Ek Bilgiler",
  ]);

  const TextComponent = ({
    detail,
    index,
  }: {
    detail: string;
    index: number;
  }) => {
    return (
      <View
        style={{
          padding: 16,
          borderBottomColor: "#c1c1c1",
          borderBottomWidth: index === details.length - 1 ? 0 : 0.4,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: index === 0 ? "#000" : "#737373",
            fontSize: index === 0 ? 11 : 13,
            fontWeight: index === 0 ? "400" : "500",
          }}
        >
          {detail}
        </Text>
        {index !== 0 && (
          <Entypo name="chevron-small-down" size={24} color="#989898" />
        )}
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: "#fff" }}>
      {details.map((item, index) => (
        <TextComponent key={index} index={index} detail={item} />
      ))}
    </View>
  );
}

export default index;
