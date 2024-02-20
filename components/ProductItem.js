import { Text, View } from "react-native";
import styles from "../styles/globals";

const ProductItem = ({ item }) => {
  return (
    <View style={styles.productItem}>
      <Text>
        {" "}
        Name of the product {item.id}: {item.name}
      </Text>
    </View>
  );
};
export default ProductItem;
