import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View,Text,Image,Alert} from 'react-native';
import { Button as PaperButton, Card,Provider } from 'react-native-paper';

const MyCard = (props) => {
    let card = props.card;
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);
    return (
        <Provider>
        <View style={[styles.border, {width:'100%',backgroundColor:'white'}]}>
            <View style = {styles.centerContainer}>
                <Card key={card.id} style={{width:'100%'}}>
                    <Card.Cover style={{width:100,height:100,backgroundColor:'white',justifyContent: 'center',right:-45,resizeMode: 'contain',bottom:-20}} source={card.image}/>
                    <Card.Title style={{bottom:-40}} title = {card.title} subtitle = {card.subtitle}/>
                    <Card.Actions>
                        <Image style={{bottom:20,right:-100}} source={require('../tabicon/Rectangle63.png')}/>
                        <Image style={{bottom:20,right:-80}} source={require('../tabicon/ic_baseline-eco.png')}/>
                            <PaperButton style={{bottom:15,right:-30,width:50,height:50}} onPress={function(){
                                    Alert.alert('아이템구매',
                                    '구매하시겠습니까?',
                                    [
                                    {
                                        text: '예',
                                        onPress: () => null,
                                    },
                                    {
                                        text: '아니오',
                                        onPress:  () => null ,
                                    }
                                    ])
                                    }}
                            >         
                            </PaperButton>
                                <Text style={{bottom:20,right:15,color:'white'}}>200</Text>    
                    </Card.Actions>
                </Card>
            </View>  
        </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    centerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    border: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderStyle: 'dotted'
    }
});

export default MyCard;