import { Button, Text, TextInput, View } from "react-native";
import styles from "./styles/globals";
import { useState } from "react";

export default function App() {
  const [productName, setProductName] = useState("");
  const [products, setProducts] = useState([]);
  const handleTextChange = (text) => {
    setProductName(text);
  };
  const handlePress = (e) => {
    console.log("Button pressed");
    setProducts((prevState) => [...prevState, productName]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.viewText}>
        <Text style={styles.textTitle}>Hello shopping card</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={productName}
          style={styles.textInput}
          placeholder="Enter the name of the product"
          onChangeText={handleTextChange}
        ></TextInput>
        <Button title="Valider" style={styles.button} onPress={handlePress} />
      </View>
      <View>
        {products.length > 0 &&
          products.map((product, index) => (
            <View key={index}>
              <Text> Name of the product: {product}</Text>
            </View>
          ))}
      </View>
    </View>
  );
}
