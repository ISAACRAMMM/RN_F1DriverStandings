import { Tabs } from "expo-router";
import { View } from "react-native";

import { HomeIcon, CircleInfoIcon } from "../../components/Icons";

export default function TabsLayout(){
    return(
        <Tabs
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="index"
            options={{
                tabBarIcon: ({color}) => <HomeIcon color={color}/>
            }}
            />
            <Tabs.Screen
                name="about"
            options={{
                tabBarIcon: ({color}) => <CircleInfoIcon color={color}/>
            }}
            />
        </Tabs>
    )
}