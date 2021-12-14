import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, Alert,Image,ImageBackground,tabBarIcon,tabBarOptions,TouchableOpacity} from 'react-native';
import { DefaultTheme, Provider, FAB, Portal, } from 'react-native-paper';
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
const plastic = () => {
    const [visible, setVisible] = React.useState(false);
  
    const showDialog = () => setVisible(true);
  
    const hideDialog = () => setVisible(false);
  
    return (
      <Provider>
        <View>
          <Button onPress={showDialog}>Show Dialog</Button>
          <Portal>
            <Dialog style={{height:200,width:200,alignItems:'center',position:'absolute',bottom:20}} visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Alert</Dialog.Title>
              <Dialog.Content>
                <Paragraph>This is simple dialog</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>Done</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </Provider>
    );
  };
const Main = (props) => {
  console.log('IceBerg', props);
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });
  
  const { open } = state;
        return (
            <Provider>
            <ImageBackground
                    style={{ width: "100%", height: "100%" }}  
                    source={require("../png/바탕.png")} 
                    resizeMode="cover" 
            >  
                <TouchableOpacity activeOpacity={0.2}
                    style={styles.GuildStyle}
                    onPress={() => props.navigation.navigate("information")}
                >
                    <Image source ={require('../tabicon/길드2.png')}
                    style={styles.floatingButtonStyle}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.2}
                    style={styles.optionStyle}
                    onPress={() => props.navigation.navigate("Setup")}
                >
                    <Image source ={require('../tabicon/setting.png')}
                    style={styles.floatingButtonStyle}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.2}
                    style={styles.adornmentStyle}
                    onPress={() => props.navigation.navigate("Setup")}
                >
                    <Image source ={require('../tabicon/open_with.png')}
                    style={styles.floatingButtonStyle}/>
                </TouchableOpacity>
           

            </ImageBackground>
            </Provider>
        );
}


const Ice = (props) => { 
	console.log('HomeScreen', props);
	const tabicons = {"information" : '../tabicon/info.png'}
	let iconName =null;
	
	return (
        <View style={{flex:1,justifyContent:'center'}}>
            
		<Tab.Navigator initialRouteName = 'Main' 
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					console.log(route,focused,color,size);

					if (route.name === "information") {
						return <Image source={require('../tabicon/cil_recycle.png') } style={{ width: 20, height: 20 }} />;
					}
                    else if(route.name === "Level") {
						return <Image source={require('../tabicon/quiz.png') } style={{ width: 20, height: 20 }} />;
					}
                    else if(route.name === "Main") {
						return <Image source={require('../tabicon/메인.png') } style={{ width: 20, height: 20 }} />;
					}
                    else if(route.name === "Shop") {
						return <Image source={require('../tabicon/market.png') } style={{ width: 20, height: 20 }} />;
					}
                    else if(route.name === "Setup") {
						return <Image source={require('../tabicon/업적.png') } style={{ width: 20, height: 20 }} />;
					}
					
				},

                //Ionicons name={iconName}
				tabBarActiveTintColor: '#96F0EA',
				tabBarActiveBackgroundColor:'yellow',
				tabBarInactiveTintColor: 'gray'
                
			})}
		>
			<Tab.Screen name="information" component={InformationScreen} options={{ title: 'Information'}}/>		
			<Tab.Screen name="Level" component={DrawScreen} options={{ headerShown: false }}/>
			<Tab.Screen name="Main" component={Main} options={{ headerShown: false }}/>
			<Tab.Screen name="Shop" component={TabScreen} options={{title: 'Shop'}} />
			<Tab.Screen name="Setup" component={SetScreen} options={{title: 'Setup' }} />
		</Tab.Navigator>	
        </View>	
	);
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    fab: {
        position: 'absolute',
        margin: 30,
        right: 0,
        bottom: 0,
    },
    GuildStyle: {
        position: 'absolute',
        width: 80,
        height:80,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        borderRadius: 40,
        backgroundColor:"white",
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        tintColor:'gray',
        //backgroundColor:'black'
    },
    optionStyle: {
        position:'relative',
        width: 45,
        height:45,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: -10,
        bottom: -50,
        borderRadius: 40,
        backgroundColor:"white",
    },
    adornmentStyle: {
        position:'relative',
        width: 45,
        height: 45,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: -60,
        bottom: -5,
        borderRadius: 40,
        backgroundColor:"white",
    },
});
export default Ice;