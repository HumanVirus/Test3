import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View,Text,Image,Alert} from 'react-native';
import { Button as PaperButton, Card } from 'react-native-paper';
import plastic from '../Info/plastic';
const MyCard = ( props ) => {
    let card = props.card;
    return (
        <View style={[styles.border, {width:'100%',backgroundColor:'white'}]}>
            <View style = {styles.centerContainer}>
                <Card key={card.id} style={{width:'100%'}}>
                    <Card.Title style={{bottom:0}} title = {card.title}/>
                    <Card.Cover style={{bottom:0,width:'100%',height:200}} source={card.image}/>
                    <Card.Actions>
                            <PaperButton style={{bottom:15,right:-30,width:50,height:50}} 
                            onPress={plastic}
                            >
                                <Image style={{bottom:0,right:0}} source={require('../tabicon/Frame30.png')}/>         
                            </PaperButton>
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