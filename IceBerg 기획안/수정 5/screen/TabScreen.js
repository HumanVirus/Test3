import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Image, ScrollView, FlatList,Alert,Text,SafeAreaView,Pressable,ImageBackground } from 'react-native';
import { Avatar, Title, Paragraph, List, Button as PaperButton, ActivityIndicator, Colors, Badge, Card, Searchbar,BottomNavigation } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
const MyCardS = ( props ) => {
    let card = props.card;
        return (
            <View style={[styles.border, {width:'50%'}]}>
                <View style = {styles.centerContainer}>
                    <Card key={card.id} style={{width:'100%'}}>
                        <Card.Cover source={{uri:card.uri}}/>
                        <Card.Title title = {card.title} subtitle = {card.subtitle}/>
                        <Card.Actions>
                            <Text> 200P </Text>
                            <PaperButton style={{right:-100}}
                                color="#f194ff"
                                onPress={function(){
                                Alert.alert('아이템구매',
                                '이런젠장',
                                [
                                  {
                                    text: '예',
                                    onPress: async () => await ref.add(),
                                  },
                                  {
                                    text: '아니오',
                                    onPress:  () => null ,
                                  }
                                ])
                                }}
                            >
                                구입
                            </PaperButton>
                        </Card.Actions>
                    </Card>
                </View>  
            </View>
        );
}
const Tab1 = (props) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    let card = [
        {id:'1', title:'숲 조각', subtitle:'level 2', uri : 'https://lh3.googleusercontent.com/proxy/s54Yq-sHSEmjmeuAjIEiYFi4n8y4Sap_INRlQy66GxbUBf0qbc5GO0jiNVPPUsxchucpKx8xt6c3L7shhdZrWgmiHyRt4ewW-t1rUWNpx5BVf2248-lKv48p7VavOVc'},
        {id:'2', title:'해변 조각', subtitle:'level 3', uri : 'https://lh3.googleusercontent.com/proxy/s54Yq-sHSEmjmeuAjIEiYFi4n8y4Sap_INRlQy66GxbUBf0qbc5GO0jiNVPPUsxchucpKx8xt6c3L7shhdZrWgmiHyRt4ewW-t1rUWNpx5BVf2248-lKv48p7VavOVc'},
        {id:'3', title:'추가 하트', subtitle:'Play item', uri : 'https://lh3.googleusercontent.com/proxy/QEPMVKhKNiocHnQwYWIo1muVO4ZK_mGCGypVZET82217y_iW0xAHL9aqsvcEiZxhDFeHx6_sgl8BOvPWHr3F6gR4UhhFfACPdIEv40WZswDKNJ3j6q-2yF_a'},
        {id:'4', title:'15초 추가', subtitle:'Play item', uri : 'https://lh3.googleusercontent.com/proxy/QEPMVKhKNiocHnQwYWIo1muVO4ZK_mGCGypVZET82217y_iW0xAHL9aqsvcEiZxhDFeHx6_sgl8BOvPWHr3F6gR4UhhFfACPdIEv40WZswDKNJ3j6q-2yF_a'},
        {id:'5', title:'5', subtitle:'level 2', uri : 'https://lh3.googleusercontent.com/proxy/QEPMVKhKNiocHnQwYWIo1muVO4ZK_mGCGypVZET82217y_iW0xAHL9aqsvcEiZxhDFeHx6_sgl8BOvPWHr3F6gR4UhhFfACPdIEv40WZswDKNJ3j6q-2yF_a'}        
    ];
    const onChangeSearch = query => setSearchQuery(query);
        return (
            <ImageBackground
                style={{ width: "100%", height: "100%" }}  
                source={require("../png/바탕.png")}
                resizeMode="cover" 
            >
                         
                <View style={styles.container} >
                    <FlatList key={Math.random().toString()}
                        data={card}
                        keyExtractor={(item)=>item.id}
                        renderItem={({item})=> (<MyCardS key={item.id} card={item}/>) }
                        numColumns={2}
                    />
                </View>               
            </ImageBackground>
    /*console.log("시장", props);
    const[count,setCount] = useState(0);
    const [ color, setColor ] = useState('white');
    const myStyle = {
        flex: 1, 
        padding: 10,
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
                                Alert.alert('아이템구매',
                                '구매 하시겠습니까?',
                                [
                                  {
                                    text: '예',
                                    onPress: async () => await ref.add(),
                                  },
                                  {
                                    text: '아니오',
                                    onPress:  () => null ,
                                  }
                                ],)
                                }}
                            />
                        </Card.Actions>
                </Card>
        </View>
        </SafeAreaView>*/
    );
}

const LeftContent = props => <Avatar.Icon {...props} icon="" />
const RightContent = props =>  <Avatar.Text size={24} label="P" />
const MyCard = ( props ) => {
    let card = props.card;
        return (
            <View style={[styles.border, {width:'50%'}]}>
                <View style = {styles.centerContainer}>
                    <Card key={card.id} style={{width:'100%'}}>
                        <Card.Cover source={{uri:card.uri}}/>
                        <Card.Title title = {card.title} subtitle = {card.subtitle}/>
                        <Card.Actions>
                        <Text> 300P </Text>
                            <PaperButton  style={{right:-70}} onPress={()=> {
                                console.log('Pressed', card);
                            }}>
                                        정보보기
                            </PaperButton>
                        </Card.Actions>
                    </Card>
                </View>  
            </View>
        );
}
const Tab2 = (props) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    let card = [
        {id:'1', title:'GreenPeace', subtitle:'환경보호단체', uri : 'https://lh3.googleusercontent.com/proxy/s54Yq-sHSEmjmeuAjIEiYFi4n8y4Sap_INRlQy66GxbUBf0qbc5GO0jiNVPPUsxchucpKx8xt6c3L7shhdZrWgmiHyRt4ewW-t1rUWNpx5BVf2248-lKv48p7VavOVc'},
        {id:'2', title:'지구의 벗', subtitle:'환경운동연합', uri : 'https://mblogthumb-phinf.pstatic.net/MjAxNzA4MjlfMTQ4/MDAxNTAzOTg3MzMwMjAw.gFieThXM0omwWFtYxJTd7NydFz61WcbAxNsx3JZxcL4g.3C3D7cv9iQV9y9GQ6DT5xHpTdTnyVnh82-lyAm5R9VUg.JPEG.nie_korea/C1F6B1B8C0C7_B9FE2.jpg?type=w800'},
        {id:'3', title:'WWF', subtitle:'세계자연기금', uri : 'https://d1diae5goewto1.cloudfront.net/_skins/pandaorg3/img/logo.png'},
        {id:'4', title:'Earth Hour', subtitle:'세계자연기금', uri : 'http://rac-spa.org/sites/default/files/images/earth_hour_2020.preview.jpg'},
        {id:'5', title:'5', subtitle:'환경보호단체', uri : 'https://lh3.googleusercontent.com/proxy/QEPMVKhKNiocHnQwYWIo1muVO4ZK_mGCGypVZET82217y_iW0xAHL9aqsvcEiZxhDFeHx6_sgl8BOvPWHr3F6gR4UhhFfACPdIEv40WZswDKNJ3j6q-2yF_a'}        
    ];
    const onChangeSearch = query => setSearchQuery(query);
        return (
            <ImageBackground
                style={{ width: "100%", height: "100%" }}  
                source={require("../png/바탕.png")}
                resizeMode="cover" 
            >
                         
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
    /*console.log("기관", props)
    const [cardData, setCardData] = useState([
        { id: 1, title: 'Hello World'},
        { id: 2, title: 'Hello Mobile'}
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
    ));
    return (
        <View style={styles.container} >         
            <ScrollView style={styles.container}>
                <View style={[styles.border, styles.centerContainer]}>
                    <Text style={{fontWeight: 'bold', fontSize: 24}}>카드 목록</Text>
                </View>
                <View style={[styles.border, styles.cards]}>
                    {cardsView}
                </View>
                <View style={[styles.border, styles.centerContainer]}>
                    <PaperButton style={styles.button} onPress={()=> { addCard(); }}>
                        새로운 아이템 등록
                    </PaperButton>
                </View>
            </ScrollView>       
        </View>
    );*/
}
  
const TabScreen = (props) => {
    console.log('TabScreen', props);  
    const [index, setIndex] = useState(0);  
    const [routes] = useState([
        { key: 'tab1', title: '상품구매'},
        { key: 'tab2', title: '기부하기'}        
    ]);
    const renderScene = BottomNavigation.SceneMap({
        tab1: Tab1,
        tab2: Tab2       
    });
    return (
        
        <BottomNavigation
            styles={{alignItems: 'center',bottom: 100,}}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            screenOptions={({ route }) => ({

            tabBarInactiveBackgroundColor:'#3F51B5',
            })}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        position:'relative',
        flex: 1,
        backgroundColor: '#3F51B5'
    },
    logo: {
        width: 66,
        height: 58
    },
    cards: {
        flex: 10, 
        flexDirection: 'row', 
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        overflow: 'hidden'
    },
    border: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderStyle: 'dotted'
    },
});
export default TabScreen;