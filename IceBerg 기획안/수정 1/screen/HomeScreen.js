import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



const Ice = (props) => {
    console.log('HomeScreen', props);
        return (

            <View style={styles.container} >
              <Text> IceBerg </Text>
            <Button title="정보" onPress={()=>props.navigation.navigate('information')} />   
            <Button title="Level" onPress={()=>props.navigation.navigate('Level')} />    
            <Button title="Shop" onPress={()=>props.navigation.navigate('Shop')} /> 
            <Button title="Setup" onPress={()=>props.navigation.navigate('Setup')} />
            
            
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#96F0EA',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Ice;