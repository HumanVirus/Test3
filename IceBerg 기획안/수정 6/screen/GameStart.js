import React, { useState } from 'react';
import { StyleSheet,Image,TouchableOpacity,View,Text} from 'react-native';

const Gamestart = (props) => {
    const[count,setCount] = useState(0);
    const[count1,setCount1] = useState(3);
        return (

            <View style={styles.container}>
            <View style={styles.case1}>
                <Image style={{right:-140,top:50,}} source={require('../tabicon/Rectangle94.png')}/>
                <Text style={{color:'black',fontSize:20,right:-150,top:20}}> LEVEL 1</Text>
                <Text style={{color:'black',fontSize:30,right:-230,top:30}}>{count}획득점수</Text>
                <Text style={{color:'black',fontSize:30,right:-230,top:30}}>{count1}목숨</Text>
            </View>
            <View style={styles.case2}>
                <Image style={{right:-50}} source ={require('../tabicon/Frame52.png')}/>
                <TouchableOpacity activeOpacity={0.2}
                    style={styles.team2}
                    onPress={()=> {
                        setCount1( count1 - 1 );
                        if(count1<=1){
                            return props.navigation.navigate("GameEnd");
                        }}}
                >
                <Image style={{}} source ={require('../tabicon/Group6831.png')}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.2}
                    style={styles.team2}
                    onPress={()=> {
                        setCount1( count1 - 1 );
                        if(count1<=1){
                            return props.navigation.navigate("GameEnd");
                        }}}
                >
                <Image style={{}} source ={require('../tabicon/Group6832.png')}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.2}
                    style={styles.team2}
                    onPress={()=> {
                        setCount1( count1 - 1 )
                    if(count1<=1){
                        return props.navigation.navigate("GameEnd");
                    }}}
                >
                <Image style={{}} source ={require('../tabicon/Group6833.png')}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.2}
                    style={styles.team2}
                    onPress={()=> {
                        setCount( count + 1 );
                    }}
                >
                <Image style={{}} source ={require('../tabicon/Group6834.png')}/>
                </TouchableOpacity>
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
        backgroundColor: 'white',
    },
    case2: {
        flex: 3,
        backgroundColor: 'white'
    },
    team2: {
        position:'relative',
        width: 80,
        height: 80,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: -150,
        bottom: 0,
        borderRadius: 40,
        
          
    }
});
export default Gamestart;