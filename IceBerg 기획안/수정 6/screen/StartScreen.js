import React from 'react';
import { StyleSheet,Image,ImageBackground,TouchableOpacity} from 'react-native';
import {Provider } from 'react-native-paper';

const start = (props) => {
        return (
            <Provider>
                <ImageBackground
                    style={{ width: "100%", height: "100%" }}  
                    //source={require("../tabicon/메인화면.png")} 
                    resizeMode="cover" 
                >
                    <TouchableOpacity activeOpacity={0.2}
                        style={styles.Home} 
                        onPress={() => props.navigation.navigate("IceBerg")}
                    >
                        <Image source ={require('../tabicon/메인화면.png')}
                        style={styles.floatingButtonStyle}/>
                    </TouchableOpacity>       
                </ImageBackground>
            </Provider>
        );
  }
  

const styles = StyleSheet.create({
    Home: {
        position: 'absolute',
        width: 400,
        height:400,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
        bottom: 200,
        borderRadius: 40,
        backgroundColor:"white",
    },
    floatingButtonStyle: {
        
        width: 400,
        height: 400,
        right: 0,
        bottom: 0,
        //stintColor:'white'
    }
});
export default start;