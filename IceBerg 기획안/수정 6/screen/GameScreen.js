import React from 'react';
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity,Image } from 'react-native';
import { Provider, Button} from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Information from './InformationScreen';

const Drawer = createDrawerNavigator();

function level1 (props) {
    const [visible, setVisible] = React.useState(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};
    return (
        <Provider>
        <ImageBackground
            style={{ width: "100%", height: "100%" }}  
            source={require("../png/바탕.png")} 
            resizeMode="cover" 
        >
            <View style={styles.container} >
                <Text style={{fontSize:40,bottom:50}}>LV 1</Text>
                <Text style={{fontSize:20,bottom:20}}>쓸쓸한 북극곰을 도와주세요</Text>
                <Image style={{width:300,height:300,bottom:50}} source ={require('../tabicon/게임디오라마1.png')}/>
                <TouchableOpacity activeOpacity={0.2}
                    style={styles.team2}
                    onPress={()=> {
                        props.navigation.navigate("Gamestart");
                        }}
                >
                <Image style={{resizeMode:'stretch',width:150,height:60,top:20}} source ={require('../tabicon/Rectangle64.png')}/>
                <Text style={{fontSize:30,bottom:30,color:'white'}}>Go!</Text>
                </TouchableOpacity>
           
            </View>
        </ImageBackground>
        </Provider>
    );
} 
function level2 (props) {
    return (
        <Provider>
        <ImageBackground
            style={{ width: "100%", height: "100%" }}  
            source={require("../png/바탕.png")} 
            resizeMode="cover" 
        >
            <View style={styles.container} >
                <Text style={{fontSize:40,bottom:50}}>LV 2</Text>
                <Text style={{fontSize:20,bottom:20}}>섬이 말라가요 도와주세요</Text>
                <Image style={{width:300,height:300,bottom:50}} source ={require('../tabicon/게임디오라마2.png')}/>
                <TouchableOpacity activeOpacity={0.2}
                    style={styles.team2}
                    onPress={()=> {
                        props.navigation.navigate("Gamestart");
                        }}
                >
                <Image style={{resizeMode:'stretch',width:150,height:60,top:20}} source ={require('../tabicon/Rectangle64.png')}/>
                <Text style={{fontSize:30,bottom:30,color:'white'}}>Go!</Text>
                </TouchableOpacity>
           
            </View>
        </ImageBackground>
        </Provider>
    );
}

    
function Game( { navigation, route } ) {
    return (
        <ImageBackground
                style={{ width: "100%", height: "100%" }}  
                source={require("../png/바탕.png")} 
                resizeMode="cover" 
                >
            <Drawer.Navigator>
                <Drawer.Screen name="level1" component={level1} />
                <Drawer.Screen name="level2" component={level2} />
            </Drawer.Navigator>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    team2: {
        position:'relative',
        width: 130,
        height: 130,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
        bottom: 0,
        borderRadius: 20,
          
    }
});
export default  Game;