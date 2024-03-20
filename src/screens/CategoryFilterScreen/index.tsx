import { ScrollView, Text } from "react-native";
import CategoryFiltering from "../../components/CategoryFiltering";
import TypeFiltering from "../../components/TypeFiltering";
import ProductsContainer from "../../components/ProductsContainer";
import { useState } from "react";
import { Category } from "../../models";

function index(props) {
  const [category, setCategory] = useState<Category>(
    props.route.params.category
  );
  return (
    <ScrollView>
      <CategoryFiltering category={category} />
      <TypeFiltering />
      <ProductsContainer />
    </ScrollView>
  );
}

export default index;