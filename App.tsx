import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Platform,
} from "react-native";
import { SECONDS_IN_MINUTE, TIME_TYPE } from "./src/constants";
import Header from "./src/components/Header";

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * SECONDS_IN_MINUTE);
  const [currentTime, setCurrentTime] = useState<TIME_TYPE>("POMO");

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingTop: Platform.OS === "android" ? 30 : 0 }}>
        <Text style={styles.text}>Pomodoro</Text>
        <Text>{time}</Text>
        <Header
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          setTime={setTime}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
