import { Button, TextInput, View } from "react-native";
import styles from "../styles/globals";
import { useState } from "react";

export const ProductForm = ({ handlePress }) => {
  const [product, setProduct] = useState({
    name: "",
    id: Date.now().toString(),
  });

  const handleTextChange = (text) => {
    setProduct((prevState) => ({
      ...prevState,
      name: text,
      id: Date.now().toString(),
    }));
  };
  const handleSubmit = (e) => {
    handlePress(product);
    setProduct({
      name: "",
      id: "",
    });
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={product.name}
        style={styles.textInput}
        placeholder="Enter the name of the product"
        onChangeText={handleTextChange}
      ></TextInput>
      <Button title="Valider" style={styles.button} onPress={handleSubmit} />
    </View>
  );
};
