import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View,ImageBackground } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();


function Setup( { navigation, route } ) {
    return (
      <ImageBackground
                style={{ width: "100%", height: "100%" }}  
                source={require("./png/바탕.png")} 
                resizeMode="cover" 
                >
      <View style={styles.container}>
     
     
        <Text>설정</Text>
        <Button title="사운드" 
          onPress={()=> {
            navigation.navigate("sound");
          }} />
          <Button title="공지사항" 
          onPress={()=> {
            navigation.navigate("Notice");
          }} />
          <Button title="Q&A" 
          onPress={()=> {
            navigation.navigate("QA");
          }} />
           <Button title="오류신고" 
          onPress={()=> {
            navigation.navigate("ErrorReport");
          }} />
           <Button title="App 평가하기" 
          onPress={()=> {
            navigation.navigate("AppEvaluation");
          }} />
          

      </View>
      </ImageBackground>

      
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    logo: {
        width: 55,
        height: 48,
    },
});


  export default Setup;