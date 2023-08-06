import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import {
  HEADER_TIME_OPTIONS,
  SECONDS_IN_MINUTE,
  TIME_TYPE,
  TIME_TYPES,
} from "../constants";

interface HeaderProps {
  currentTime: TIME_TYPE;
  setCurrentTime: React.Dispatch<React.SetStateAction<TIME_TYPE>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}

export default function Header({
  currentTime,
  setCurrentTime,
  setTime,
}: HeaderProps) {
  const handleTime = (index: number) => {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(TIME_TYPES[index]);
    setTime(newTime * SECONDS_IN_MINUTE);
  };

  return (
    <View style={{ flexDirection: "row" }}>
      {HEADER_TIME_OPTIONS.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleTime(index)}
          style={styles.button}
        >
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
