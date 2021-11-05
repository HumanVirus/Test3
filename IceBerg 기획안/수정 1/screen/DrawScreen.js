import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();

function  information(props) {
  return (
    <View style={styles.container}>
      
        <Button title="메인화면" 
        onPress={()=> {
          props.navigation.navigate("Ice");
        }} />
    </View>
  );
}

function level1 (props) {
    return (
      <View style={styles.container} >
     <Text>1단계</Text>
     <Button title="정보" 
     onPress={()=> {
       props.navigation.navigate("information");
     }} />
    </View>
    );
  }
  
  function level2 (props) {
    return (
      <View style={styles.container} >
      <Text>2단계</Text>
      <Button title="정보" 
      onPress={()=> {
        props.navigation.navigate("information");
      }} />
     </View>
    );
  }
  
  const level3 = (props) => {
    return (
      <View style={styles.container} >
     <Text>3단계</Text>
     <Button title="정보" 
     onPress={()=> {
       props.navigation.navigate("information");
     }} />
    </View>
    );
  }
  
  
  
  
  //props = { navigation: { ... }, route: { }} 
  function Journal( { navigation, route } ) {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="level1" component={level1} />
        <Drawer.Screen name="level2" component={level2} />
        <Drawer.Screen name="level3" component={level3} />
      </Drawer.Navigator>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default  Journal;