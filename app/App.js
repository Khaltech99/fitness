import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { color } from "../assets/color";

export default function App() {
  const [fontsLoaded] = useFonts({
    Pregular: require("../assets/fonts/Poppins-Regular.ttf"),
    Pmedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PsemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    Pbold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <>
        <Text>THE FONT IS NOT LOADED</Text>
      </>
    );
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "Pbold",
          fontSize: 49,
          color: color.brandLightPurple,
        }}
      >
        working
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
