import {
  Button,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import styles from "./styles/globals";
import { useState } from "react";
import { ProductForm, ProductList } from "./components";

export default function App() {
  const [products, setProducts] = useState([]);
  const handlePress = (product) => {
    if (product.name.trim().length > 1) {
      setProducts((prevState) => [product, ...prevState]);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewText}>
        <Text style={styles.textTitle}>Hello shopping card</Text>
      </View>
      <ProductForm handlePress={handlePress} />
      <ProductList products={products} />
    </View>
  );
}
