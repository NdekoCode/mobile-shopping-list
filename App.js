import { Text, View } from "react-native";
import styles from "./styles/globals";
import { useState } from "react";
import { ProductForm, ProductList } from "./components";

export default function App() {
  const [products, setProducts] = useState([]);
  const clearProducts = () => {
    setProducts([]);
  };
  const handlePress = (product) => {
    setProducts((prevState) => [product, ...prevState]);
  };
  const onDelete = (id) => {
    setProducts(products.filter((d) => d.id !== id));
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewText}>
        <Text style={styles.textTitle}>Hello shopping card</Text>
      </View>
      <ProductForm handlePress={handlePress} clearProducts={clearProducts} />
      <ProductList products={products} onDelete={onDelete} />
    </View>
  );
}
