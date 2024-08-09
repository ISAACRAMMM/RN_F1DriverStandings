import { useEffect, useState, useRef } from "react";
import { View, StyleSheet, Text, Image, Animated, Pressable } from "react-native";
import { Points } from "./Points";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable)

export function DriversList({ drivers, maxPoints }) {
  return (
    <Link asChild href={`/${drivers.driverId}`}>
    <StyledPressable className="active:opacity-70 mb-1 " >
    <View
      className="top-3 mb-4 ml-5 container "
      key={drivers.driverId}
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

      <View className='   flex-row  justify-between items-center mr-8'>
        <View className='' > 
          <Points points={drivers.points} maxPoints={maxPoints} />
        </View>
        <View className='items-end'>
          <Text className='text-base '>{drivers.constructors}</Text>
        </View>
      </View>
    </View>
    </StyledPressable>
    </Link>
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
