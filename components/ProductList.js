import { FlatList } from "react-native";
import styles from "../styles/globals";
import { ProductItem } from "./ProductItem";

export const ProductList = ({ products }) => {
  console.log(products);
  return (
    products.length > 0 && (
      <FlatList
        style={styles.productContainer}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem item={item} />}
      ></FlatList>
    )
  );
};
