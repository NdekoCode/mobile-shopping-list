import { Text, View } from "react-native";
import styles from "../styles/globals";

export const ProductItem = ({ item }) => {
  return (
    <View style={styles.productItem} onPress={() => console.log("Pressed")}>
      <Text>
        {" "}
        Name of the product {item.id}: {item.name}
      </Text>
    </View>
  );
};
