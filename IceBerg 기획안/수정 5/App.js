import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View, Alert,ImageBackground} from 'react-native';
import { DefaultTheme, Provider as PaperProvider, Checkbox } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/HomeScreen';
import TabScreen from './screen/TabScreen';
import DrawScreen from './screen/DrawScreen';
import SetScreen  from './screen/SetScreen';
import StartScreen  from './screen/StartScreen';
import SoundScreen from './screen/SoundScreen';
import plastic from './Info/plastic';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ReminderTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'green',
        accent: 'yellow',
    }
};

function  Notice(props) {
    return (
        <View style={styles.container}>
            <Text>공지사항</Text>
                <Button title="메인화면"
                    onPress={()=> {
                    props.navigation.navigate("Ice");
                }}/>
        </View>
    );
}

function  QA(props) {
    return (
        <View style={styles.container}>
            <Text>Q&A</Text>
                <Button title="메인화면 " 
                    onPress={()=> {
                    props.navigation.navigate("Ice");
                }}/>
        </View>
    );
}

function  ErrorReport(props) {
    return (
        <View style={styles.container}>
            <Text>에러신고</Text>
                <Button title="메인화면 " 
                    onPress={()=> {
                    props.navigation.navigate("Ice");
                }}/>
        </View>
    );
}

function  AppEvaluation(props) {
    return (
        <View style={styles.container}>
            <Text>앱평가</Text>
                <Button title="메인화면 " 
                    onPress={()=> {
                    props.navigation.navigate("Ice");
                }}/>
        </View>
    );
}

const App = () =>  {
    return (

        <PaperProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Main" component={StartScreen} options={{ headerShown: false }}/>
                    <Stack.Screen name="IceBerg" component={HomeScreen} options={{ headerShown: false }}/>
                    <Stack.Screen name="Level" component={DrawScreen} options={{ headerShown: false }}/>
                    <Stack.Screen name="Shop" component={TabScreen} options={{ headerShown: false }} 
                        options={{title: 'Shop',
                            headerStyle: {
                                backgroundColor: '#7FFFD4'
                            },
                            headerTintColor: '#00008B',
                            headerTitleStyle: {
                                fontWeight: 'bold'
                            }
                        }}
                    />
                    <Stack.Screen name="Sound" component={SoundScreen} options={{ headerShown: false }}/>
                    <Stack.Screen name="Plastic" component={plastic} />
                    <Stack.Screen name="Setup" component={SetScreen} />
                    <Stack.Screen name="Notice" component={Notice} />
                    <Stack.Screen name="QA" component={QA} />
                    <Stack.Screen name="ErrorReport" component={ErrorReport} />
                    <Stack.Screen name="AppEvaluation" component={AppEvaluation} />

                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    logo: {
        width: 66,
        height: 58
    }
});
export default App;