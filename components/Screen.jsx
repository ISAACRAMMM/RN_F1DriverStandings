import { View } from "react-native";

export function Screen({children}){
    return(
        <View className='flex-1 pt-2 bg-white   px-2 ' >{children}</View>
    )
}