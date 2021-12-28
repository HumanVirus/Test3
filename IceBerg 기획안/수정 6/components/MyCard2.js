import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View,Text,Image,Alert} from 'react-native';
import { Button as PaperButton, Card } from 'react-native-paper';

const MyCard = ( {style, card, removeCard, showCard} ) => {
    return (
        <View style={[styles.border, {width:'50%',backgroundColor:'white'}]}>
            <View style = {styles.centerContainer}>
                <Card key={card.id} style={{width:'100%'}}>
                    <Card.Cover style={{bottom:-20}} source={{uri:card.uri}}/>
                    <Card.Title style={{bottom:-40}} title = {card.title} subtitle = {card.subtitle}/>
                    <Card.Actions>
                        <Image style={{bottom:20,right:-100}} source={require('../tabicon/Rectangle64.png')}/>
                        <Image style={{bottom:20,right:-80}} source={require('../tabicon/Rectangle66.png')}/>
                            <PaperButton style={{bottom:15,right:-30,width:50,height:50}} onPress={function(){
                                    Alert.alert('기부하기',
                                    '기부하시겠습니까?',
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
                                <Text style={{bottom:20,right:15,color:'white'}}>100</Text>    
                    </Card.Actions>
                </Card>
            </View>  
        </View>
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