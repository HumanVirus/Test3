import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, Alert,Image,ImageBackground,tabBarIcon,tabBarOptions} from 'react-native';
import { DefaultTheme, Provider, FAB, Portal } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import Icon from '@mdi/react'
import { mdiArrowUpDropCircleOutline } from '@mdi/js';
import TabScreen from './TabScreen';
import DrawScreen from './DrawScreen';
import SetScreen  from './SetScreen';
import InformationScreen from './InformationScreen';

const HomeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Main = (props) => {
  console.log('IceBerg', props);
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });
  
  const { open } = state;
      return (
        <Provider>
        <ImageBackground
                style={{ width: "100%", height: "100%" }}  
                source={require("./png/바탕.png")} 
                resizeMode="cover" 
                >
  
    <Portal>
      <FAB.Group
        open={open}
        icon={open ? 'calendar-today' : 'Arrow'}
        actions={[
          { icon: 'plus', onPress: () => console.log('Pressed add') },
          {
            icon: 'plus',
            label: '내정보',
            onPress: () => console.log('Pressed star'),
          },
          {
            icon: 'email',
            label: '길드정보',
            onPress: () => console.log('Pressed email'),
          },

        ]}
        onStateChange={onStateChange}
        onPress={() => {
          if (open) {
            // do something if the speed dial is open
          }
        }}
      />
    </Portal>
  
          </ImageBackground>
          </Provider>
      );
}


const Ice = (props) => { 
console.log('HomeScreen', props);
        return (
          
           <Tab.Navigator initialRouteName = 'Main'
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "information") {
                iconName = './png/inpo.png';
                }
                return <Image source={require('./png/inpo.png') } style={{ width: 10, height: 10 }} />;
            },
          
        
         
          tabBarActiveTintColor: '#96F0EA',
          inactiveTintColor: 'gray',
        })}
           >
            <Tab.Screen name="information" component={InformationScreen} options={{ title: 'Information'}}/>
            

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
