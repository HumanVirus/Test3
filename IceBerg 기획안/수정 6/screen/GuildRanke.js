import React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground ,TouchableOpacity, Button} from 'react-native';
import { Avatar,Modal,Portal,Button as PaperButton } from 'react-native-paper';

const  GuildR = (props) => {
    var cnt =0;
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white',padding: 20,width:300, height:300,right: -50, bottom: 0, };
    return(
        <View style={styles.container}>
            <View style={styles.case2} >
                <Image style={{right:-5, bottom:-5,width:320}} size={100} source={require('../tabicon/Rectangle.png')} />
                <Avatar.Image style={{right:-20, bottom:82}} size={80} source={require('../tabicon/Avatar.png')} />
                <Text style={{bottom:160,right:-150,fontSize:30,color: 'black'}}>이름</Text>
                <Image style={{right:-150, bottom:150,width:20,height:20}} size={10} source={require('../tabicon/Avatar.png')} />
                
            </View>
            <View style={styles.case3}>
                <ImageBackground
                style={{ width: "100%", height: "100%" }}  
                source={require("../tabicon/Rectangle19.png")}
                resizeMode="cover"
                >
                    <Avatar.Image style={{right:-20, bottom:0, backgroundColor: 'white'}} size={80} source={require('../tabicon/게임디오라마1.png')} />
                    <Text style={{bottom:-10,right:-20}}>GreenPeace</Text>
                    <Avatar.Image style={{right:-130, bottom:98, backgroundColor: 'white'}} size={80} source={require('../tabicon/게임디오라마2.png')} />
                    <Text style={{bottom:88,right:-140}}>지구의 벗</Text>
                    <Avatar.Image style={{right:-240, bottom:195, backgroundColor: 'white'}} size={80} source={require('../tabicon/게임디오라마3.png')} />
                    <Text style={{bottom:188,right:-240}}>세계자연기금</Text>
                </ImageBackground>    
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
        flex: 2,
        backgroundColor: 'white',
        borderWidth: 30,
        borderColor: 'white',
        borderStyle:'solid'
    },
    case3: {
        flex: 8,
        backgroundColor: 'blue',
        borderWidth: 20,
        borderColor: 'white',
        borderStyle: 'dotted'
    },
    cnt:{
        fontSize:20,
        bottom:0,
        right:0,
        color:'black'
    }
});
export default GuildR;