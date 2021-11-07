import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View, Alert,ImageBackground} from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabScreen from './TabScreen';
import DrawScreen from './DrawScreen';
import SetScreen  from './SetScreen';


function  information(props) {
    return (
        <ImageBackground
                style={{ width: "100%", height: "100%" }}  
                source={require("./png/바탕.png")} 
                resizeMode="cover" 
                >
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            
        <Text>inpo</Text>
        </View>
        </ImageBackground>

    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#96F0EA',
    },
    logo: {
        width: 55,
        height: 48,
    },
});


  export default information;