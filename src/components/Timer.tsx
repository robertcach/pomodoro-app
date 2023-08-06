import { Text, View, StyleSheet } from "react-native";

interface TimerProps {
  time: number;
}

export default function Timer({ time }: TimerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 15,
  },
  time: {
    fontSize: 80,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333333",
  },
});
