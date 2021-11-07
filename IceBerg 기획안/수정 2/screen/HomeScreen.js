import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View, Alert,Image,ImageBackground} from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import TabScreen from './TabScreen';
import DrawScreen from './DrawScreen';
import SetScreen  from './SetScreen';
import InformationScreen from './InformationScreen';

const HomeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


const Main = (props) => {
  console.log('HomeScreen', props);
      return (
        <ImageBackground
                style={{ width: "100%", height: "100%" }}  
                source={require("./png/바탕.png")} 
                resizeMode="cover" 
                >
          <View style={styles.container} >
            <Text> IceBerg </Text>
          <Button title="정보" onPress={()=>props.navigation.navigate('information')} />   
          <Button title="Level" onPress={()=>props.navigation.navigate('Level')} />    
          <Button title="Shop" onPress={()=>props.navigation.navigate('Shop')} /> 
          <Button title="Setup" onPress={()=>props.navigation.navigate('Setup')} />
          
          
          </View>
          </ImageBackground>

      );
}


const Ice = (props) => { 
console.log('HomeScreen', props);
        return (
          
           <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

                        if (route.name === "information") {
                            iconName = './png/바탕.png';
                        }
                        return <Image source={iconName} style={{ width: 25, height: 25 }} />;
          }
        })}
        
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
            <Tab.Screen name="information" component={InformationScreen} options={{ title: 'information'}}/>
            

            <Tab.Screen name="Level" component={DrawScreen} options={{ headerShown: false }}/>

            <Tab.Screen name="Main" component={Main} options={{ headerShown: false }}/>

            <Tab.Screen name="Shop" component={TabScreen} options={{title: 'Shop'}} />

             <Tab.Screen name="Setup" component={SetScreen} options={{title: 'Setup' }} />


            </Tab.Navigator>

            
        
        );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Ice;
