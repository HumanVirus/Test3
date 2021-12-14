import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View, Alert,ImageBackground,ScrollView,FlatList} from 'react-native';
import { Avatar, Title, Paragraph, List, Button as PaperButton, ActivityIndicator, Colors, Badge, Card, Searchbar, Dialog, Portal, Provider } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TabScreen from './TabScreen';
import DrawScreen from './DrawScreen';
import SetScreen  from './SetScreen';
import plastic from '../Info/plastic';

const MyCard = ( props ) => {
    let card = props.card;
        return (
            <View style={[styles.border, {width:'50%'}]}>
            <View style = {styles.centerContainer}>
            <Card key={card.id} style={{width:'100%'}}>
            <Card.Title title = {card.title}/>
            <Card.Cover source={{uri:card.uri}}/>
                <Card.Actions>
                    <PaperButton onPress={()=>props.navigation.navigate(navigate)}
                    >
                        정보보기
                    </PaperButton>
                </Card.Actions>
            </Card>
            </View>  
            </View>
        );
}

const  Information = (props) => {
    console.log("Information",props)
    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);
    const [searchQuery, setSearchQuery] = React.useState('');
    let card = [
        {id:'1', title:'플라스틱', uri : 'http://design.gabia.com/wordpress/wp-content/uploads/2016/08/plastic01.jpg'},
        {id:'2', title:'병', uri : 'https://previews.123rf.com/images/bialasiewicz/bialasiewicz1211/bialasiewicz121100136/16302964-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EB%B0%B0%EA%B2%BD%EC%97%90-%EC%9E%AC%ED%99%9C%EC%9A%A9%EC%9D%84%EC%9C%84%ED%95%9C-%EB%B9%88-%EC%9C%A0%EB%A6%AC-%EB%B3%91.jpg'},
        {id:'3', title:'캔', uri : 'http://www.yakup.com/data/editor/news/201804/JEWdSQMfDL6qBrfm2vvK_s1.jpg'},
        {id:'4', title:'종이', uri : 'https://gscaltexmediahub.com/wp-content/uploads/2020/11/GSC_BP_MH_Save_paper_Tips_20200807_2.jpg'},
        {id:'5', title:'유리', uri : 'http://i6233.cafe24.com/wp-content/uploads/2018/07/%EA%B0%95%ED%99%9403.jpg',navigate:'Sound'}
        
    ];
    const onChangeSearch = query => setSearchQuery(query);
        return (
            <ImageBackground
                style={{ width: "100%", height: "100%" }}  
                source={require("../png/바탕.png")}
                resizeMode="cover" 
            >
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />                
                <View style={styles.container} >
                    <FlatList key={Math.random().toString()}
                        data={card}
                        keyExtractor={(item)=>item.id}
                        renderItem={({item})=> (<MyCard key={item.id} card={item}/>) }
                        numColumns={2}
                    />
                </View>               
            </ImageBackground>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
            width: 55,
            height: 48,
    },
    border: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderStyle: 'dotted'
    },
    text: {
        alignItems:'center',
        justifyContent: 'center',
        fontSize: 5,
        color: 'blue'
    }
});
export default Information;