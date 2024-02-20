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
import ProductList from "./components/ProductList";

export default function App() {
  const [productName, setProductName] = useState({
    name: "",
    id: Date.now().toString(),
  });
  const [products, setProducts] = useState([]);
  const handleTextChange = (text) => {
    setProductName((prevState) => ({
      ...prevState,
      name: text,
      id: Date.now().toString(),
    }));
  };
  const handlePress = (e) => {
    console.log("Button pressed");
    if (productName.name.trim().length > 1) {
      setProducts((prevState) => [productName, ...prevState]);
      setProductName((prev) => ({ ...prev, name: "", id: "" }));
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewText}>
        <Text style={styles.textTitle}>Hello shopping card</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={productName.name}
          style={styles.textInput}
          placeholder="Enter the name of the product"
          onChangeText={handleTextChange}
        ></TextInput>
        <Button title="Valider" style={styles.button} onPress={handlePress} />
      </View>
      <ProductList products={products} />
    </View>
  );
}
