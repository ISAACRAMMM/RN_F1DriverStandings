import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Button,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { getDriversData, getDriverDetailsData } from "../lib/pilotos";


import { useEffect, useState } from "react";
import { DriversList, AnimatedDriversList } from "./DriversList";

export function Main() {
  const [drivers, setDrivers] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getDriversData().then((drivers) => {
      setDrivers(drivers);
    });
  }, []);
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      
      {drivers.length === 0 ? (
        <ActivityIndicator />
      ) : (
       
        <FlatList
          data={drivers}
          keyExtractor={drivers =>  drivers.givenName}
          renderItem={({ item, index }) => <AnimatedDriversList drivers={item} index={index} />}
        >
          {drivers.map((drivers) => (
            <DriversList key={drivers.givenName} drivers={drivers} />
          ))}
        </FlatList>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {},
  name: {
    fontSize: 24,
    color: "black",
  },
  detalles: {
    fontSize: 15,
    color: "black",
    paddingLeft: 4,
  },
  card: {
    alignItems: "right",
  },
});
