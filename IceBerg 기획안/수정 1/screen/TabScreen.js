import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button, Image, ScrollView, FlatList } from 'react-native';
import { Avatar, Title, Paragraph, List, Button as PaperButton, ActivityIndicator, Colors, Badge, Card, Searchbar } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const Tab1 = (props) => {
    console.log("시장", props);
    return ( 
      <View style={styles.container} >

       <Button onPress={()=>props.navigation.navigate('myshop')} title="아이템 샵" />
        <Card>
            
        <Card.Title title="스토어"  right={RightContent} />

        </Card>
       
         <Card>
                <Card.Title title="아이템명"  left={LeftContent} />
                
                <Card.Cover source={{ uri: 'https://en.pimg.jp/038/507/769/1/38507769.jpg' }} />
                <Card.Actions>
                <Button title="구입" onPress={()=>props.navigation.navigate('myshop')} />

                </Card.Actions>
            </Card>

   
    
      </View>
      );
}

const LeftContent = props => <Avatar.Icon {...props} icon="" />
const RightContent = props =>  <Avatar.Text size={24} label="P" />
  
const Tab2 = (props) => {
    console.log("기관", props)
    return (
      <View style={styles.container} >
          
        <ScrollView style={styles.container}>
        
            <Card>
                <Card.Title title="대기오염" left={LeftContent} />
                    <Card.Content>
                        <Title>기관명</Title>
                        <Paragraph>활동내용</Paragraph>
                    </Card.Content>
                <Card.Cover source={{ uri: 'http://www.greenpostkorea.co.kr/news/photo/202006/118588_119630_392.jpg' }} />
                <Card.Actions>
                    <PaperButton>보기</PaperButton>
                    <PaperButton>기부하기</PaperButton>
                </Card.Actions>
            </Card>
            <Card>
                <Card.Title title="바다오염"  left={LeftContent} />
                    <Card.Content>
                        <Title>기관명</Title>
                        <Paragraph>활동내용</Paragraph>
                    </Card.Content>
                <Card.Cover source={{ uri: 'https://img.khan.co.kr/news/2016/09/05/201609051522598170803_0.webp' }} />
                <Card.Actions>
                    <PaperButton>보기</PaperButton>
                    <PaperButton>기부하기</PaperButton>
                </Card.Actions>
               
            </Card>
            <Button onPress={()=>props.navigation.navigate('IceBerg')} title="Home" />
        </ScrollView>
        
        
      </View>
    );
}
  
const TabScreen = (props) => {
    console.log('TabScreen', props);
    return (
        <Tab.Navigator>
          <Tab.Screen name="아이템" component={Tab1} />
          <Tab.Screen name="기관" component={Tab2} />
        </Tab.Navigator>
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