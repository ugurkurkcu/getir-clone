import { View, Text, ScrollView, Dimensions } from "react-native";
import categoriesGetir from "../../../assets/categoriesGetir";
import { useState } from "react";
import { Category } from "../../models";

const { height, width } = Dimensions.get("window");
const CategoryBox = ({
  item,
  active,
}: {
  item: Category;
  active: Category;
}) => {
  return (
    <View
      style={[
        {
          paddingHorizontal: 9,
          flexDirection: "row",
          alignItems: "center",
          height: "100%",
        },
        item.name == active.name && {
          borderBottomColor: "#ffd00c",
          borderBottomWidth: 2,
        },
      ]}
    >
      <Text
        style={{
          fontSize: 14,
          fontWeight: "600",
          color: "#FFF",
        }}
      >
        {item.name}
      </Text>
    </View>
  );
};

function index({ category }: { category: Category }) {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <ScrollView
      style={{
        width: "100%",
        backgroundColor: "#7849f7",
        height: height * 0.065,
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {categories.map((item) => (
        <View>
          <CategoryBox key={item.id} item={item} active={category} />
        </View>
      ))}
    </ScrollView>
  );
}

export default index;
