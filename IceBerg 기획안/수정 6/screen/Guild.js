import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, Alert,Image,ImageBackground,tabBarIcon,tabBarOptions,TouchableOpacity} from 'react-native';
import { DefaultTheme, Provider, FAB, Portal, } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GuildS from './GuildScreen';
import GuildR from './GuildRanke';
const Tab = createMaterialTopTabNavigator();



const Guild = () => {
	return (
		<View style={styles.container}>
			<View style={styles.case1} >
				<ImageBackground
					style={{ width: "100%", height: "100%" }}  
					source={require("../tabicon/Group6837.png")} 
					resizeMode="cover" 
				/>
			</View>
			<View style={styles.case2} >
				<Text></Text>
				<Text style={{backgroundColor:'White',fontSize:25, justifyContent:'center',right:-30}}>[우리동네 환경보호 : 분리수거]</Text>
				<Text style={{right:-40}}>12/12 ~ 12/25</Text>
				<Tab.Navigator initialRouteName = 'Main' 
					screenOptions={({ route }) => ({

						//Ionicons name={iconName}
						tabBarActiveTintColor: '#96F0EA',
						tabBarActiveBackgroundColor:'yellow',
						tabBarInactiveTintColor: 'gray'
						
					})}
				>
					<Tab.Screen name="GuildS" component={GuildS} options={{ title: '미션소개'}}/>
					<Tab.Screen name="GuildR" component={GuildR} options={{title: '팀순위'}} />
				</Tab.Navigator>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: 'white',
	},
	case1: {
	  flex: 1,
	  backgroundColor: 'red',
	},
	case2: {
	  flex: 3,
	  backgroundColor: 'white',
	},
});

export default Guild;