import { useEffect, useRef } from 'react';
import {View, StyleSheet, Text, Image, Animated} from 'react-native'
export function DriversList({ drivers}){
    return(
        <View className='bg-slate-600' key={drivers.slug} style={styles.card}>
        <Text style={styles.name}> {drivers.givenName} </Text>
        <Text style={styles.detalles}> {drivers.points}</Text>
      </View> 
    )
}

export function AnimatedDriversList({ drivers,index}){
    const opacity = useRef(new Animated.Value(0)).current;
    
    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: index*250,
            useNativeDriver: true,

        }).start();

    }, [opacity, index]);

    return(
        <Animated.View style={ { opacity }}>
            <DriversList drivers={drivers}/>
        </Animated.View> 
    )

}

const styles = StyleSheet.create({
    mainContainer:{
       
   
    },
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