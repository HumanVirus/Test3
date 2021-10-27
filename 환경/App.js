import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ReminderTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function  information(props) {
  return (
    <View style={styles.container}>
      
        <Button title="메인화면" 
        onPress={()=> {
          props.navigation.navigate("Ice");
        }} />
    </View>
  );
}

function  Start(props) {
  return (
    <View style={styles.container}>
      
        <Button title="메인화면" 
        onPress={()=> {
          props.navigation.navigate("Ice");
        }} />
    </View>
  );
}

function  marketplace(props) {
  return (
    <View style={styles.container}>
      
      <Text>친환경 시장</Text>
        <Button title="메인화면" 
        onPress={()=> {
          props.navigation.navigate("Ice");
        }} />
    </View>
  );
}

function  search(props) {
  return (
    <View style={styles.container}>
      
      <Text>기관</Text>
        <Button title="메인화면" 
        onPress={()=> {
          props.navigation.navigate("Ice");
        }} />
    </View>
  );
}

function Ideas (props) {
  return (
    <View style={styles.container}>
      <Text>Ideas</Text>
      <Button title="홈으로 이동" 
        onPress={()=> {
          props.navigation.navigate("Ice");
        }} />
    </View>
  );
}

function  sound(props) {
  return (
    <View style={styles.container}>
      <Text>사운드</Text>
        <Button title="메인화면 " 
        onPress={()=> {
          props.navigation.navigate("Ice");
        }} />
    </View>
  );
}

function  Notice(props) {
  return (
    <View style={styles.container}>
      <Text>공지사항</Text>
        <Button title="메인화면 " 
        onPress={()=> {
          props.navigation.navigate("Ice");
        }} />
    </View>
  );
}

function  QA(props) {
  return (
    <View style={styles.container}>
      <Text>Q&A</Text>
        <Button title="메인화면 " 
        onPress={()=> {
          props.navigation.navigate("Ice");
        }} />
    </View>
  );
}

function  ErrorReport(props) {
  return (
    <View style={styles.container}>
      <Text>에러신고</Text>
        <Button title="메인화면 " 
        onPress={()=> {
          props.navigation.navigate("Ice");
        }} />
    </View>
  );
}
function  AppEvaluation(props) {
  return (
    <View style={styles.container}>
      <Text>앱평가</Text>
        <Button title="메인화면 " 
        onPress={()=> {
          props.navigation.navigate("Ice");
        }} />
    </View>
  );
}

function level1 (props) {
  return (
    <View style={styles.container}>
      <Text>1단계</Text>
      <Button title="정보" 
        onPress={()=> {
          props.navigation.navigate("information");
        }} />
        <Button title="시작" 
        onPress={()=> {
          props.navigation.navigate("Start");
        }} />
    </View>
  );
}

function level2 (props) {
  return (
    <View style={styles.container}>
      <Text>2단계</Text>
      <Button title="정보" 
        onPress={()=> {
          props.navigation.navigate("information");
        }} />
        <Button title="시작" 
        onPress={()=> {
          props.navigation.navigate("Start");
        }} />
    </View>
  );
}

function level3 (props) {
  return (
    <View style={styles.container}>
      <Text>3단계</Text>
      <Button title="정보" 
        onPress={()=> {
          props.navigation.navigate("information");
        }} />
        <Button title="시작" 
        onPress={()=> {
          props.navigation.navigate("Start");
        }} />
    </View>
  );
}




//props = { navigation: { ... }, route: { }} 
function Journal( { navigation, route } ) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="level1" component={level1} />
      <Drawer.Screen name="level2" component={level2} />
      <Drawer.Screen name="level3" component={level3} />
    </Drawer.Navigator>
  );
}

function Notes( { navigation, route } ) {
  return (
    <View style={styles.container}>
      <Text>순위표</Text>
    
    </View>
  );
}



function Reminders1( { navigation, route } ) {
  return (
    <View style={styles.container}>
      <Text>기부가능 기관</Text>
      <Button title="기관검색" 
        onPress={()=> {
          navigation.navigate("search");
        }} />
    </View>
  );
}
function Reminders2( { navigation, route } ) {
  return (
    <View style={styles.container}>
      <Text>제품목록</Text>
      <Button title="시장으로 이동" 
        onPress={()=> {
          navigation.navigate("marketplace");
        }} />
    </View>
  );
}
function shop() {
  return (
    <ReminderTab.Navigator>
      <ReminderTab.Screen name="기부목록" component={Reminders1} />
      <ReminderTab.Screen name="친환경소재구매" component={Reminders2} />
    </ReminderTab.Navigator>
  );
}



function Setup( { navigation, route } ) {
  return (
    <View style={styles.container}>
   
          
      <Text>설정</Text>
      <Button title="사운드" 
        onPress={()=> {
          navigation.navigate("sound");
        }} />
        <Button title="공지사항" 
        onPress={()=> {
          navigation.navigate("Notice");
        }} />
        <Button title="Q&A" 
        onPress={()=> {
          navigation.navigate("QA");
        }} />
         <Button title="오류신고" 
        onPress={()=> {
          navigation.navigate("ErrorReport");
        }} />
         <Button title="App 평가하기" 
        onPress={()=> {
          navigation.navigate("AppEvaluation");
        }} />
    </View>
  );
}

function Ice() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Journal" component={Journal} options={{title: 'Main',
          headerStyle: {
            backgroundColor: '#BA55D3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }
       } />
      <Tab.Screen name="랭킹" component={Notes} options={{title: '랭킹',
          headerStyle: {
            backgroundColor: '#BA55D3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }
       } />
      <Tab.Screen name="shop" component={shop} options={{title: '스토어',
          headerStyle: {
            backgroundColor: '#BA55D3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }
       } />
      <Tab.Screen name="Setup" component={Setup} options={{title: '설정',
          headerStyle: {
            backgroundColor: '#BA55D3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }
       } />
    </Tab.Navigator>
  );
}




function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Ice">
        <Stack.Screen name="information" component={information} />
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="marketplace" component={marketplace} />
        <Stack.Screen name="search" component={search} />
        <Stack.Screen name="sound" component={sound} />
        <Stack.Screen name="Notice" component={Notice} />
        <Stack.Screen name="QA" component={QA} />
        <Stack.Screen name="ErrorReport" component={ErrorReport} />
        <Stack.Screen name="AppEvaluation" component={AppEvaluation} />
        <Stack.Screen name="Reminders2" component={Reminders2} />
        <Stack.Screen name="Ideas" component={Ideas} />
        <Stack.Screen name="Ice" component={Ice} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

