import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View,ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();

function level1 (props) {
    return (
        <ImageBackground
            style={{ width: "100%", height: "100%" }}  
            source={require("../png/바탕.png")} 
            resizeMode="cover" 
        >
            <View style={styles.container} >
                <Text>1단계</Text>
                <Button title="정보" 
                onPress={()=> {
                props.navigation.navigate("information");
                }} />
            </View>
            </ImageBackground>
            );
} 
function level2 (props) {
    return (
        <ImageBackground
            style={{ width: "100%", height: "100%" }}  
            source={require("../png/바탕.png")} 
            resizeMode="cover" 
        >
            <View style={styles.container} >
                <Text>2단계</Text>
                <Button title="정보" 
                onPress={()=> {
                    props.navigation.navigate("information");
                }} />
            </View>
        </ImageBackground>
    );
}

const level3 = (props) => {
    return (
        <ImageBackground
                style={{ width: "100%", height: "100%" }}  
                source={require("../png/바탕.png")} 
                resizeMode="cover" 
                >
            <View style={styles.container} >
                <Text>3단계</Text>
                <Button title="정보" 
                onPress={()=> {
                props.navigation.navigate("information");
                }} />
            </View>
        </ImageBackground>
    );
}
    
function Journal( { navigation, route } ) {
    return (
        <ImageBackground
                style={{ width: "100%", height: "100%" }}  
                source={require("../png/바탕.png")} 
                resizeMode="cover" 
                >
            <Drawer.Navigator>
                <Drawer.Screen name="level1" component={level1} />
                <Drawer.Screen name="level2" component={level2} />
                <Drawer.Screen name="level3" component={level3} />
            </Drawer.Navigator>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default  Journal;