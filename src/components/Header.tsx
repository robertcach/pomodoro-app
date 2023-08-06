import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { TIME_TYPE } from "../constants";

interface HeaderProps {
  currentTime: TIME_TYPE;
  setCurrentTime: React.Dispatch<React.SetStateAction<TIME_TYPE>>;
  time: number;
}
const timeOptions = ["Pomodoro", "Short Break", "Long Break"];

export default function Header({
  currentTime,
  setCurrentTime,
  time,
}: HeaderProps) {
  return (
    <View style={{ flexDirection: "row" }}>
      {timeOptions.map((option) => (
        <TouchableOpacity style={styles.button}>
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "33%",
    borderWidth: 3,
    padding: 5,
  },
});
