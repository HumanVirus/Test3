import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Image, ScrollView, FlatList,Alert,Text,SafeAreaView,Pressable } from 'react-native';
import { Avatar, Title, Paragraph, List, Button as PaperButton, ActivityIndicator, Colors, Badge, Card, Searchbar,BottomNavigation } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const Tab1 = (props) => {
    console.log("시장", props);
    const[count,setCount] = useState(0);
    const [ color, setColor ] = useState('white');
    const myStyle = {
        flex: 1, 
        padding: 24,
    }
    return ( 

    <SafeAreaView style={myStyle}>
       <View style={styles.container} >

       <Button onPress={()=>props.navigation.navigate('myshop')} title="아이템 샵" />
       <Text>
           {count}
           </Text>
           <PaperButton onPress={()=> {
                    setCount( count + 1 );
                    setColor( color == 'white');
                    console.log('count', count);
                }}>
                    카운트
                </PaperButton>
        <Card>
            
        <Card.Title title="스토어"  right={RightContent} />

        </Card>
       
        <Card>
                <Card.Title title="아이템명"  left={LeftContent} />
                
                <Card.Cover source={{ uri: 'https://en.pimg.jp/038/507/769/1/38507769.jpg' }} />
                <Card.Actions>
        <Button
          style={styles.buttonStyle}
          title="구입 "
          color="#f194ff"
          onPress={function(){
            Alert.alert('내 아이템에서 확인하세요')
          }}
        />
        </Card.Actions>
        </Card>

      </View>
      </SafeAreaView>
      );
}

const LeftContent = props => <Avatar.Icon {...props} icon="" />
const RightContent = props =>  <Avatar.Text size={24} label="P" />
  
const Tab2 = (props) => {
    console.log("기관", props)
    const [cardData, setCardData] = useState([
        { id: 1, title: 'Hello World', },
        { id: 2, title: 'Hello Mobile' }
    ]);

    const addCard = () => {
        let card = { id: Math.random().toString(), title: 'New Card'};
        console.log('addCard', card.id);
        setCardData([...cardData, card]);
    }
    const removeCard = (id) => {
        console.log('removeCard', id);
        let result = cardData.filter( (card) => { return card.id != id; } );
        setCardData([...result]);
    }

    let cardsView = cardData.map( (card) => (
        <Pressable key={card.id} onPress={() => { removeCard(card.id); } } >
            <Card style={{width: 150, height: 200, padding: 4, margin: 16}}>
                <Card.Content>
                    <Title>{card.title}</Title>
                </Card.Content>
            </Card>
        </Pressable>
    ) );
    return (
      <View style={styles.container} >
          
        <ScrollView style={styles.container}>
        <View style={[styles.border, styles.centerContainer]}>
                <Text style={{fontWeight: 'bold', fontSize: 24}}>카드 목록</Text>
            </View>
            <View style={[styles.border, styles.cards]}>
                {cardsView}
            </View>
        </ScrollView>
        
        
      </View>
    );
}
  
const TabScreen = (props) => {
    console.log('TabScreen', props);
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'tab1', title: 'Tab1', icon: 'table-row' },
        { key: 'tab2', title: 'Tab2', icon: 'folder-table-outline' },
        { key: 'newTab', title: 'New Tab', icon: 'table-row'}
    ]);
    const renderScene = BottomNavigation.SceneMap({
        tab1: Tab1,
        tab2: Tab2,
       
    });
    return (
        <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
    />
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    logo: {
        width: 66,
        height: 58,
    },
});

export default TabScreen;