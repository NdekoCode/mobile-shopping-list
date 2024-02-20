import { FlatList, Text, View } from "react-native";
import styles from "../styles/globals";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  return (
    <FlatList
      style={styles.productContainer}
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductItem item={item} />}
    ></FlatList>
  );
};

export default ProductList;
