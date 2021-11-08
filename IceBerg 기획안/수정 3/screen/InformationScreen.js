import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View, Alert,ImageBackground,ScrollView} from 'react-native';
import { Avatar, Title, Paragraph, List, Button as PaperButton, ActivityIndicator, Colors, Badge, Card, Searchbar } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TabScreen from './TabScreen';
import DrawScreen from './DrawScreen';
import SetScreen  from './SetScreen';

const  information = (props) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
    return (
     <ImageBackground
        style={{ width: "100%", height: "100%" }}  
        source={require("./png/바탕.png")} 
        resizeMode="cover" 
      >
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />

    <ScrollView>
      <View style={[styles.border, {flexDirection:'row',
                                        flexWrap:'wrap',
                                        justifyContent:'space-around',
                                        alignItems:'center'}]}>
    <Card>
    <Card.Title style = {styles.text} title="플라스틱" />
        <Card.Cover source={{ uri: 'http://design.gabia.com/wordpress/wp-content/uploads/2016/08/plastic01.jpg' }} />
          <Card.Actions>
              <Button
                style={styles.buttonStyle}
                title="정보보기 "
                color="#96F0EA"
              />
           </Card.Actions>
        </Card>
    <Card>
    <Card.Title title="유리" />
        <Card.Cover source={{ uri: 'https://previews.123rf.com/images/bialasiewicz/bialasiewicz1211/bialasiewicz121100136/16302964-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EB%B0%B0%EA%B2%BD%EC%97%90-%EC%9E%AC%ED%99%9C%EC%9A%A9%EC%9D%84%EC%9C%84%ED%95%9C-%EB%B9%88-%EC%9C%A0%EB%A6%AC-%EB%B3%91.jpg' }} />
          <Card.Actions>
              <Button
                style={styles.buttonStyle}
                title="정보보기 "
                color="#96F0EA"
               
              />
           </Card.Actions>
    </Card>
    <Card>
    <Card.Title title="캔" />
        <Card.Cover source={{ uri: 'http://www.yakup.com/data/editor/news/201804/JEWdSQMfDL6qBrfm2vvK_s1.jpg' }} />
          <Card.Actions>
              <Button
                style={styles.buttonStyle}
                title="정보보기 "
                color="#96F0EA"
      
              />
           </Card.Actions>
    </Card>
</View>
    </ScrollView>
    </ImageBackground>

    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#96F0EA',
    },
    logo: {
        width: 55,
        height: 48,
    },
    border: {
      borderWidth: 1,
      borderColor: 'green',
      borderStyle: 'dotted'
  },
  text: {
    alignItems:'center',
    justifyContent: 'center',
    fontSize: 5,
    color: 'blue',
}
});


  export default information;