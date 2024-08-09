import { Link, Stack } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { Logo } from "../components/Logo";
import { CircleInfoIcon } from "../components/Icons";

export default function Layout() {
  return (
    <View className="flex-1 ">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "white" },
         
          headerTitle: () => (
            <Link asChild href="/">
              <Logo />
            </Link>
          ),
         
        }}
      />
    </View>
  );
}
