import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Product } from "../../models";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

type productItemType = {
  item: Product;
};

function index({ item }: productItemType) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={()=> navigation.navigate("ProductDetails",{product:item})}
      style={{
        width: width * 0.29,
        height: height * 0.24,
        // marginVertical: 12,
        marginLeft: 11,
        marginTop: 12,
      }}
    >
      <Image
        style={{
          width: width * 0.3,
          height: width * 0.28,
          borderRadius: 12,
          borderColor: "#c1c1c1",
          borderWidth: 0.2,
        }}
        source={{ uri: item.image }}
      />
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 11,
            color: "#747990",
            textDecorationLine: "line-through",
          }}
        >
          <Text>{"\u20ba"}</Text>
          {item.fiyat}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "#5c3ecb",
            fontWeight: "bold",
            marginLeft: 14,
          }}
        >
          <Text>{"\u20ba"}</Text>
          {item.fiyatIndirimli}
        </Text>
      </View>
      <Text style={{ fontSize: 12, fontWeight: "600", marginTop: 5 }}>
        {item.name}
      </Text>
      <Text
        style={{
          color: "#747990",
          fontSize: 12,
          fontWeight: "500",
          marginTop: 5,
        }}
      >
        {item.miktar}
      </Text>
      <View
        style={{
          width: 30,
          height: 30,
          borderColor: "#c1c1c1",
          borderWidth: 0.2,
          backgroundColor: "#fff",
          borderRadius: 6,
          position: "absolute",
          right: -6,
          top: -6,
          alignItems: "center",
          justifyContent: "center",
          shadowRadius: 3.8,
          shadowOpacity: 0.06,
        }}
      >
        <Entypo name="plus" size={22} color="#5d3ebd" />
      </View>
    </TouchableOpacity>
  );
}

export default index;
