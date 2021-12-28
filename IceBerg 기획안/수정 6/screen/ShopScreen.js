import React, { useState } from 'react';
import { StyleSheet, View, FlatList,Alert,Text, ImageBackground, Image, ScrollView, Button} from 'react-native';
import { Avatar, Button as PaperButton, Card, Title, Paragraph } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GuildS from './GuildScreen';
import MyCard from '../components/MyCard';
import MyCard2 from '../components/MyCard2';
const Tab = createMaterialTopTabNavigator();

const Tab1 = (props) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    let card = [
        {id:'1', title:'숲 조각', subtitle:'level 2',image: require('../tabicon/emojione-v1_evergreen-tree.png')},
        {id:'2', title:'해변 조각', subtitle:'level 3', image: require('../tabicon/emojione_beach-with-umbrella.png')},
        {id:'3', title:'추가 하트', subtitle:'Play item', image: require('../tabicon/ri_heart-add-fill.png')},
        {id:'4', title:'15초 추가', subtitle:'Play item', image: require('../tabicon/ri_heart-add-fill1.png')},
        {id:'5', title:'힌트추가', subtitle:'Play item',  image: require('../tabicon/healthicons_magnifying-glass.png')}        
    ];
    const onChangeSearch = query => setSearchQuery(query);
        return (                       
                <View style={styles.container} >
                    <FlatList key={Math.random().toString()}
                        data={card}
                        keyExtractor={(item)=>item.id}
                        renderItem={({item})=> (<MyCard key={item.id} card={item}/>) }
                        numColumns={2}
                    />
                </View>               

      
    );
}

const LeftContent = props => <Avatar.Icon {...props} icon="" />
const RightContent = props =>  <Avatar.Text size={24} label="P" />

const Tab2 = (props) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    let card = [
        {id:'1', title:'그린피스', subtitle:'환경보호단체', uri : 'https://lh3.googleusercontent.com/proxy/s54Yq-sHSEmjmeuAjIEiYFi4n8y4Sap_INRlQy66GxbUBf0qbc5GO0jiNVPPUsxchucpKx8xt6c3L7shhdZrWgmiHyRt4ewW-t1rUWNpx5BVf2248-lKv48p7VavOVc'  },
        {id:'2', title:'지구의 벗', subtitle:'환경운동연합', uri : 'https://mblogthumb-phinf.pstatic.net/MjAxNzA4MjlfMTQ4/MDAxNTAzOTg3MzMwMjAw.gFieThXM0omwWFtYxJTd7NydFz61WcbAxNsx3JZxcL4g.3C3D7cv9iQV9y9GQ6DT5xHpTdTnyVnh82-lyAm5R9VUg.JPEG.nie_korea/C1F6B1B8C0C7_B9FE2.jpg?type=w800'},
        {id:'3', title:'WWF', subtitle:'세계자연기금', uri : 'https://d1diae5goewto1.cloudfront.net/_skins/pandaorg3/img/logo.png'},
        {id:'4', title:'Earth Hour', subtitle:'세계자연기금', uri : 'http://rac-spa.org/sites/default/files/images/earth_hour_2020.preview.jpg'},
        {id:'5', title:'5', subtitle:'환경보호단체', uri : 'https://lh3.googleusercontent.com/proxy/QEPMVKhKNiocHnQwYWIo1muVO4ZK_mGCGypVZET82217y_iW0xAHL9aqsvcEiZxhDFeHx6_sgl8BOvPWHr3F6gR4UhhFfACPdIEv40WZswDKNJ3j6q-2yF_a'}        
    ];
    const onChangeSearch = query => setSearchQuery(query);
        return (
            <View style={styles.container} >
                <FlatList key={Math.random().toString()}
                    data={card}
                    keyExtractor={(item)=>item.id}
                    renderItem={({item})=> (<MyCard2 key={item.id} card={item}/>) }
                    numColumns={2}
                />
            </View>               
        );
}

const ShopScreen = (props) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="상품구매" component={Tab1} />
            <Tab.Screen name="기부하기" component={Tab2} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        position:'relative',
        flex: 1,
        backgroundColor: 'white'
    },
    centerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%'
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
        borderColor: 'green',
        borderStyle: 'dotted'
    },
});
export default ShopScreen;