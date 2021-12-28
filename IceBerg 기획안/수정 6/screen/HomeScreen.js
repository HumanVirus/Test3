import React from 'react';
import { StyleSheet,  Text, View,Image,ImageBackground,TouchableOpacity} from 'react-native';
import {  Provider, Portal,Modal,Button, Switch, List,TextInput  } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopScreen from './ShopScreen';
import Game from './GameScreen';
import InformationScreen from './InformationScreen';
import Myscreen from './Myscreen';

const Tab = createBottomTabNavigator();

const Main = (props) => {
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const [visible2, setVisible2] = React.useState(false);
    const showModal2 = () => setVisible2(true);
    const hideModal2 = () => setVisible2(false);
    
    const [visible3, setVisible3] = React.useState(false);
    const showModal3 = () => setVisible3(true);
    const hideModal3 = () => setVisible3(false);

    const [visible4, setVisible4] = React.useState(false);
    const showModal4 = () => setVisible4(true);
    const hideModal4 = () => setVisible4(false);

    const [visible5, setVisible5] = React.useState(false);
    const showModal5 = () => setVisible5(true);
    const hideModal5 = () => setVisible5(false);

    const [visible6, setVisible6] = React.useState(false);
    const showModal6 = () => setVisible6(true);
    const hideModal6 = () => setVisible6(false);
    
    const [visible7, setVisible7] = React.useState(false);
    const showModal7 = () => setVisible7(true);
    const hideModal7 = () => setVisible7(false);

    const containerStyle = {backgroundColor: 'white',padding: 20,width:300, height:500,right: -50, bottom: 0, };

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const [isSwitchOn1, setIsSwitchOn1] = React.useState(false);
    const onToggleSwitch1 = () => setIsSwitchOn1(!isSwitchOn1);

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    const [text, setText] = React.useState('');

    return (
            <Provider>
            <ImageBackground
                    style={{ width: "100%", height: "100%" }}  
                    source={require("../png/Background.png")} 
                    resizeMode="cover" 
            >  
                <TouchableOpacity activeOpacity={0.2}
                    style={styles.GuildStyle}
                    onPress={() => props.navigation.navigate("Guild")}
                >
                    <Image source ={require('../tabicon/길드2.png')}
                    style={styles.floatingButtonStyle}/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.2}
                    style={styles.optionStyle}
                    onPress={showModal}
                >
                    <Image source ={require('../tabicon/setting.png')}
                    style={styles.floatingButtonStyle}/>
                </TouchableOpacity>
                
                    <Portal>
                        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                            <Text style={{justifyContent:'center',right:-75,fontSize:30}}>환경설정</Text>
                            <Text>----------------------------------------------------------------- </Text>
                            <Button style={{marginTop: 30,tintColor:'gray'}} onPress={showModal2}>
                                사운드
                            </Button>
                            <Button style={{marginTop: 30}} onPress={showModal3}>
                                공지사항
                            </Button>
                            <Button style={{marginTop: 30}} onPress={showModal4}>
                                Q&A
                            </Button>
                            <Button style={{marginTop: 30}} onPress={showModal5}>
                                오류신고
                            </Button>
                            <Button style={{marginTop: 30}} onPress={showModal7}>
                                APP 평가하기
                            </Button>
                        </Modal>
                            <Modal visible={visible2} onDismiss={hideModal2} contentContainerStyle={containerStyle}>
                                <TouchableOpacity activeOpacity={0.2}
                                style={styles.SoundStyle}
                                    onPress={hideModal2}
                                >
                                    <Image source ={require('../tabicon/Vector.png')}
                                    style={styles.floatingButtonStyle2}/>
                                </TouchableOpacity>             
                                <Text style={{justifyContent:'center',right:-85,fontSize:30,bottom:150}}>사운드</Text>
                                <Text style={{bottom:150}}>----------------------------------------------------------------- </Text>
                                <Text style={{justifyContent:'center',right:-85,fontSize:20,bottom:100}}>
                                    배경음악
                                </Text>
                                <View style={{justifyContent:'center',right:110,bottom:80,size:220}}>
                                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch}  
                                    trackColor={{ false: '#767587', true: '#81b0ff' }}
                                    thumbColor={isSwitchOn ? '#f5dd4b' : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"/>
                                </View>
                                <Text style={{justifyContent:'center',right:-95,fontSize:20,bottom:60}}>
                                    효과음
                                </Text>
                                <View style={{justifyContent:'center',right:110,bottom:40,size:220}}>
                                    <Switch value={isSwitchOn1} onValueChange={onToggleSwitch1}  
                                    trackColor={{ false: '#767587', true: '#81b0ff' }}
                                    thumbColor={isSwitchOn1 ? '#f5dd4b' : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"/>
                                </View>                   
                            </Modal>

                            <Modal visible={visible3} onDismiss={hideModal3} contentContainerStyle={containerStyle}>
                                <TouchableOpacity activeOpacity={0.2}
                                style={styles.NoticeStyle}
                                    onPress={hideModal3}
                                >
                                    <Image source ={require('../tabicon/Vector.png')}
                                    style={styles.floatingButtonStyle2}/>
                                </TouchableOpacity>             
                                <List.Section title="공지사항" style={{}}>
                                    <List.Accordion
                                        title="2.1.1 패치노트"
                                        left={props => <List.Icon {...props} icon="folder" />}>
                                        <List.Item title="랭킹오류 수정" />
                                        <List.Item title="Ice Berg 공지" />
                                    </List.Accordion>

                                    <List.Accordion
                                        title="이용약관"
                                        left={props => <List.Icon {...props} icon="folder" />}
                                        expanded={expanded}
                                        onPress={handlePress}>
                                        <List.Item title="개인정보법" />
                                        <List.Item title="회사약관" />
                                    </List.Accordion>
                                </List.Section>             
                            </Modal>

                            <Modal visible={visible4} onDismiss={hideModal4} contentContainerStyle={containerStyle}>
                                <TouchableOpacity activeOpacity={0.2}
                                style={styles.QAStyle}
                                    onPress={hideModal4}
                                >
                                    <Image source ={require('../tabicon/Vector.png')}
                                    style={styles.floatingButtonStyle2}/>
                                </TouchableOpacity>             
                                <Text style={{justifyContent:'center',right:-95,fontSize:30,bottom:10}}>Q&A</Text>
                                <Text style={{bottom:0}}>----------------------------------------------------------------- </Text>
                                <List.Section title="자주묻는 질문" style={{}}>
                                    <List.Accordion
                                        title="자주묻는 질문">
                                        <List.Item title="랭킹집계 시간은 어떻게 되나요?" />
                                        <List.Item title="팀가입은 어떻게하나요?" />
                                    </List.Accordion>

                                    <List.Accordion
                                        title="질문하기"
                                        expanded={expanded}
                                        onPress={handlePress}
                                        >
                                             <TouchableOpacity activeOpacity={0.2}
                                            style={styles.QAStyle1}
                                            onPress={hideModal4}
                                        >
                                            <Image source ={require('../tabicon/VectorL.png')}
                                            style={styles.floatingButtonStyle3}/>
                                        </TouchableOpacity>             
                                        <List.Item title="작성하러가기" />                               
                                    </List.Accordion>
                                </List.Section>             
                            </Modal>

                            <Modal visible={visible5} onDismiss={hideModal5} contentContainerStyle={containerStyle}>
                                <TouchableOpacity activeOpacity={0.2}
                                style={styles.QAStyle2}
                                    onPress={hideModal5}
                                >
                                    <Image source ={require('../tabicon/Vector.png')}
                                    style={styles.floatingButtonStyle2}/>
                                </TouchableOpacity>             
                                <Text style={{justifyContent:'center',right:-70,fontSize:30,bottom:150}}>오류신고</Text>
                                <Text style={{bottom:150}}>----------------------------------------------------------------- </Text>      
                                <List.Section style={{bottom:150}}>
                                    <List.Accordion
                                        title="오류내용"
                                        expanded={expanded}
                                        onPress={handlePress}
                                    >
                                        <List.Item title="이상현상" onPress={showModal6}>
                                        </List.Item>
                                        <List.Item title="로그인 문제" />
                                    </List.Accordion>

                                </List.Section>             
                            </Modal>

                            <Modal visible={visible6} onDismiss={hideModal6} contentContainerStyle={containerStyle}>
                                <TouchableOpacity activeOpacity={0.2}
                                style={styles.QAStyle3}
                                    onPress={hideModal6}
                                >
                                    <Image source ={require('../tabicon/Vector.png')}
                                    style={styles.floatingButtonStyle2}/>
                                </TouchableOpacity>             
                                <Text style={{justifyContent:'center',right:-70,fontSize:30,bottom:120}}>오류신고</Text>
                                <Text style={{bottom:120}}>----------------------------------------------------------------- </Text>      
                                <List.Section style={{bottom:120}}>
                                    <List.Accordion
                                        title="이상현상"
                                        expanded={expanded}
                                        onPress={handlePress}
                                    >
                                        <List.Item title="이상현상" onPress={showModal6}>
                                        </List.Item>
                                        <List.Item title="로그인 문제" />
                                    </List.Accordion>
                                </List.Section>
                                <Text style={{bottom:130}}>----------------------------------------------------------------- </Text>
                                <Text style={{justifyContent:'center',right:-70,fontSize:30,bottom:120}}>오류내용</Text>
                                <TextInput
                                    style={{bottom:100}}
                                    mode="outlined"
                                    label="Outlined input"
                                    placeholder="Type something"
                                    right={<TextInput.Affix text="/100" />}
                                />      
                            </Modal>

                            <Modal visible={visible7} onDismiss={hideModal7} contentContainerStyle={containerStyle}>
                                <TouchableOpacity activeOpacity={0.2}
                                style={styles.SoundStyle}
                                    onPress={hideModal7}
                                >
                                    <Image source ={require('../tabicon/Vector.png')}
                                    style={styles.floatingButtonStyle2}/>
                                </TouchableOpacity>             
                                <Text style={{justifyContent:'center',right:-45,fontSize:30,bottom:150}}>APP 평가하기</Text>
                                <Text style={{bottom:150}}>----------------------------------------------------------------- </Text>
                                <TextInput
                                    style={{bottom:100}}
                                    mode="outlined"
                                    label="Outlined input"
                                    placeholder="Type something"
                                    right={<TextInput.Affix text="/100" />}
                                />                  
                            </Modal>
                    </Portal>
                <TouchableOpacity activeOpacity={0.2}
                    style={styles.adornmentStyle}
                    onPress={() => props.navigation.navigate("Setup")}
                >
                    <Image source ={require('../tabicon/꾸미기.png')}
                    style={styles.floatingButtonStyle2}/>
                </TouchableOpacity>
            </ImageBackground>
            </Provider>
        );
}


const Ice = (props) => { 
	
	const tabicons = {"information" : '../tabicon/info.png'}
	let iconName =null;
	
	return (
        <View style={{flex:1,justifyContent:'center'}}>
            
		<Tab.Navigator initialRouteName = '나의 지구' 
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === "학습하기") {
						return <Image source={require('../tabicon/cil_recycle.png') } style={{ width: 20, height: 20 }}/>;
					}
                    else if(route.name === "퀴즈 풀기") {
						return <Image source={require('../tabicon/quiz.png') } style={{ width: 20, height: 20 }}/>;
					}
                    else if(route.name === "나의 지구") {
						return <Image source={require('../tabicon/메인.png') } style={{ width: 20, height: 20 }}/>;
					}
                    else if(route.name === "지구샵") {
						return <Image source={require('../tabicon/market.png') } style={{ width: 20, height: 20 }}/>;
					}
                    else if(route.name === "내정보") {
						return <Image source={require('../tabicon/Myinfo.png') } style={{ width: 20, height: 20 }}/>;
					}
				},
                //Ionicons name={iconName}
				tabBarActiveTintColor: '#96F0EA',
				tabBarActiveBackgroundColor:'yellow',
				tabBarInactiveTintColor: 'gray'
			})}
		>
			<Tab.Screen name="학습하기" component={InformationScreen} options={{ title: '학습하기'}}/>		
			<Tab.Screen name="퀴즈 풀기" component={Game} options={{ headerShown: false }}/>
			<Tab.Screen name="나의 지구" component={Main} options={{ headerShown: false }}/>
			<Tab.Screen name="지구샵" component={ShopScreen} options={{title: '지구샵'}} />
			<Tab.Screen name="내정보" component={Myscreen} options={{headerShown: false}} />
		</Tab.Navigator>	
        </View>	
	);
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    fab: {
        position: 'absolute',
        margin: 30,
        right: 0,
        bottom: 0,
    },
    GuildStyle: {
        position: 'absolute',
        width: 80,
        height:80,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        borderRadius: 40,
        backgroundColor:"white",
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        tintColor:'gray',
        //backgroundColor:'black'
    },
    floatingButtonStyle2: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
        tintColor:'gray',
    },
    floatingButtonStyle3: {
        resizeMode: 'contain',
        width: 15,
        height: 15,
        tintColor:'black',
    },
    optionStyle: {
        position:'relative',
        width: 45,
        height:45,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: -10,
        bottom: -50,
        borderRadius: 40,
        backgroundColor:"white",
    },
    adornmentStyle: {
        position:'relative',
        width: 80,
        height: 45,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: -60,
        bottom: -5,
        borderRadius: 40,
        backgroundColor:"yellow",
    },
    SoundStyle: {
        position:'relative',
        width: 80,
        height: 45,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 140,
        borderRadius: 40,
       
    },
    NoticeStyle: {
        position:'relative',
        width: 80,
        height: 45,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 20,
        borderRadius: 40     
    },
    QAStyle: {
        position:'relative',
        width: 80,
        height: 45,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: 40,
        bottom: -10,
        borderRadius: 40     
    },
    QAStyle1: {
        position:'relative',
        width: 10,
        height: 10,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: -230,
        bottom: -30,
        borderRadius: 40     
    },
    QAStyle2: {
        position:'relative',
        width: 80,
        height: 45,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: 40,
        bottom: 110,
        borderRadius: 40     
    },
    QAStyle3: {
        position:'relative',
        width: 80,
        height: 45,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: 40,
        bottom: 80,
        borderRadius: 40     
    },
});
export default Ice;