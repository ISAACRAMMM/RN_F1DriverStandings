import { Pressable, ScrollView } from "react-native";
import { Text } from "react-native";
import { Link } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CircleInfoIcon } from "../../components/Icons";

export default function About(){
    return(
        <ScrollView>

            <Link asChild href='/' className="mt-20">
                <Pressable>
                    <CircleInfoIcon/>
                </Pressable>
            </Link>

            <Text className=' font-bold mb-8 text-2xl'>About</Text>
            <Text>
                lorem Ipsum dolor sit amet, consectetur adipiscing elit sed
                2xlorem Ipsum dolor sit amet   
            </Text>
        </ScrollView>
    )
}