import { Text, View, StyleSheet } from "react-native";
import { SECONDS_IN_MINUTE } from "../constants";

interface TimerProps {
  time: number;
}

export default function Timer({ time }: TimerProps) {
  const formattedTime = `${Math.floor(time / SECONDS_IN_MINUTE)
    .toString()
    .padStart(2, "0")}:${(time % SECONDS_IN_MINUTE)
    .toString()
    .padStart(2, "0")}`;

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formattedTime}</Text>
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
