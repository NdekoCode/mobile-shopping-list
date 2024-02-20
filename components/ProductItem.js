import { Pressable, Text, View } from "react-native";
import styles from "../styles/globals";

export const ProductItem = ({ item, onDelete }) => {
  return (
    <Pressable activeOpacity={0.85} onPress={() => onDelete(item.id)}>
      <View style={styles.productItem}>
        <Text> Name of the product</Text>
        <Text>
          {item.id}: {item.name}
        </Text>
      </View>
    </Pressable>
  );
};
