import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View, Alert,Image,ImageBackground} from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { startClock } from 'react-native-reanimated';


const start = (props) => {
    console.log('HomeScreen', props);
        return (
            <View style={styles.container} >
                <Text></Text>
                <Text></Text>
                <ImageBackground
                style={{ width: "100%", height: "100%" }}  
                source={require("./png/바탕.png")} 
                resizeMode="cover" 
                >
                <Text style = {styles.text}> IceBerg </Text>
                <View style={styles.mystyle} >
                <Button title="시작하기" onPress={()=>props.navigation.navigate('IceBerg')} /> 
                </View>
            </ImageBackground>
            
           
            
            <Text></Text>
            <Text></Text>
            </View>
        );
  }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#96F0EA',
      justifyContent: 'center',
      alignItems:'center',
    },
    mystyle: {
        flex: 1,
        
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent: 'center',

        },
        text: {
            padding: 10,
            fontSize: 40,
         
            color: 'blue',
        },

 
    });

  export default start;