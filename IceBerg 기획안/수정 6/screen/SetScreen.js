import React from 'react';
import { StyleSheet, Button, Text, View,ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


function Setup( { navigation, route } ) {
    return (
        <ImageBackground
            style={{ width: "100%", height: "100%" }}  
            source={require("../png/바탕.png")} 
            resizeMode="cover" 
        >
            <View style={styles.container}>  
                <Text style = {styles.text}>설정</Text>
                <Text></Text>
                <Button title="사운드" 
                onPress={()=> {
                    navigation.navigate("Sound");
                }} />
                <Button title="공지사항" 
                onPress={()=> {
                    navigation.navigate("plastic");
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
        justifyContent: 'center',
        alignItems:'center'    
    },
    logo: {
        width: 55,
        height: 48
    },
    text: {
        alignItems:'center',
        justifyContent: 'center',
        padding: 10,
        fontSize: 20,
        color: 'white'
    }
});
export default Setup;