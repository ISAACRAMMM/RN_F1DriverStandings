import { Link, Stack } from "expo-router";
import { ActivityIndicator, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { Logo } from "../components/Logo";
import { useEffect, useState } from "react";
import { getDriverDetailsData } from "../lib/pilotos";

export default function DriverDetails() {
  const { id } = useLocalSearchParams();
  const [driverInfo, setDriverInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getDriverDetailsData(id).then(setDriverInfo);
    }
  }, [id]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerLeft: () => {},
          headerTitle: () => (
            <Link asChild href="/">
              <Logo/>
            </Link>
          ),
          headerRight: () => {},
        }}
      />
      <View>
        {driverInfo === null ? (
          <ActivityIndicator />
        ) : (
          <View>
            {driverInfo.map((info, index) => (
              <View key={index}>
                <Text>Temporada: {info.season}</Text>
                <Text>Victorias: {info.wins}</Text>
              </View>
            ))}
            <Link href="/">Regresar</Link>
          </View>
        )}
      </View>
    </Screen>
  );
}
