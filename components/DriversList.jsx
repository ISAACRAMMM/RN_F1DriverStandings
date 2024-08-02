import { useEffect, useState, useRef } from "react";
import { View, StyleSheet, Text, Image, Animated } from "react-native";
import { Points } from "./Points";

export function DriversList({ drivers, maxPoints }) {
  return (
    <View
      className="top-4 mb-2 ml-5 container flex "
      key={drivers.slug}
      style={styles.card}
    >
      <View className='flex-row'>
        <Text className='text-2xl'>{drivers.position}</Text>
        <Text style={styles.name}>
          {" "}
          {drivers.givenName + " " + drivers.familyName}{" "}
        </Text>
        <Text> </Text>
      </View>

      <View className='flex-row'> 
        <Points  points={drivers.points} maxPoints={maxPoints} />
        <Text className='text-base'>{drivers.constructors}</Text>
      </View>
    </View>
  );
}

export function AnimatedDriversList({ drivers, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <DriversList drivers={drivers} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
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
