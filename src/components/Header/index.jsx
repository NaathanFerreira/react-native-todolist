import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.header}>
      <Image source={require("../../assets/Logo.png")} style={styles.logo}/>
    </View>
  )
}