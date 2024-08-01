import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Button,
  TouchableHighlight,
} from "react-native";
import Constants from "expo-constants";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {Main} from "./components/Main";
import {Logo} from "./components/Logo";


export default function App() {
 

 
  return (
    
    <SafeAreaProvider>
      <View style={styles.container}>
      <Logo/>
        <StatusBar style="auto"/>
        
       <Main/>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    
    
  },
  
});
