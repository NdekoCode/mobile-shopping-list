import {
  Alert,
  Button,
  Modal,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import styles from "../styles/globals";
import { useEffect, useState } from "react";

export const ProductForm = ({ handlePress, clearProducts }) => {
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    id: Date.now().toString(),
  });
  useEffect(() => {
    if (count === 3) {
      clearProducts();
    }
  }, [count]);

  const handleTextChange = (text) => {
    setProduct((prevState) => ({
      ...prevState,
      name: text,
      id: Date.now().toString(),
    }));
  };
  const handleSubmit = (e) => {
    console.log("Hello");
    if (product.name.trim().length > 1) {
      handlePress(product);
      setProduct({
        name: "",
        id: "",
      });
      setIsValid(true);
    } else {
      setCount((c) => c + 1);
      Alert.alert(
        "Enter a valid product name",
        "Le nombre de caractere doit etre superieeure à 1",
        [
          {
            text: "COMPRIS",
            onPress: () => console.log("Compris"),
          },
          {
            text: "REFUSER",
            onPress: () => console.log("Refusé"),
          },
        ],
        {
          cancelable: true,
        }
      );
    }
  };
  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          value={product.name}
          style={styles.textInput}
          placeholder="Enter the name of the product"
          onChangeText={handleTextChange}
        ></TextInput>
        <Button
          disabled={product.name.trim().length < 2}
          title="Valider"
          style={styles.button}
          onPress={handleSubmit}
        />
      </View>
      <Modal
        visible={isValid}
        style={{ height: "auto" }}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsValid(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text>OUPS</Text>
            </View>
            <View style={styles.modalBody}>
              <Text style={{ fontWeight: "500" }}>
                Votre produit a eté ajouter
              </Text>
            </View>
            <Pressable
              style={styles.pressableButton}
              onPress={() => setIsValid(false)}
            >
              <Text style={styles.pressableButton.text}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};
