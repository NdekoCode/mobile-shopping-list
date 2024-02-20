import { Button, TextInput, View } from "react-native";
import styles from "../styles/globals";

export const ProductForm = ({ product, onChange, handlePress }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={product.name}
        style={styles.textInput}
        placeholder="Enter the name of the product"
        onChangeText={onChange}
      ></TextInput>
      <Button title="Valider" style={styles.button} onPress={handlePress} />
    </View>
  );
};
