import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
  active: boolean;
}

export default function Button({ active }: ButtonProps) {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{active ? "STOP" : "START"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333333",
    padding: 20,
    borderRadius: 15,
    marginTop: 15,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
