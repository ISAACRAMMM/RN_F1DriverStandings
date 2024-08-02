import { View, Text } from "react-native";

export function Points({ points,  maxPoints }){
    return(
        <View>
            <Text className='text-base'>{points}</Text>
        </View>

    )
}