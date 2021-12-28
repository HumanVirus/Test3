import React, { useState,  } from 'react';
import { StyleSheet,Image,TouchableOpacity,View,Text,ScrollView,Button} from 'react-native';
import {Provider,Portal,Modal,Card,Title,Button as PaperButton, Avatar } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="" />
const GameEnd = (props) => {
    const[count1,setCount1] = useState(40);
    const[count2,setCount2] = useState(50);
    const[count3,setCount3] = useState(60);

    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white',padding: 20,width:300, height:500,right: -50, bottom: 0, };
    let card = [
        {id:'1', title:'1-1', subtitle:'level 2',image: require('../tabicon/119874.png')},
        {id:'2', title:'해변 조각', subtitle:'level 3', image: require('../tabicon/119874.png')},     
    ];

        return (
            <View style={styles.container}>
            <View style={styles.case1}>
                <Text style={{color:'black',fontSize:40,right:-110,top:80}}> 게임결과</Text>
                <Image style={{right:-90,top:100,width:220,height:80}} source={require('../tabicon/Frame6.png')}/>
                <Image style={{right:-70,top:110,width:250,height:250}} source={require('../tabicon/게임디오라마1.png')}/>
                <Text style={{color:'gray',right:-50,top:140}}>항목 분리 +{count1}</Text>
                <Text style={{color:'gray',right:-150,top:120}}>분리방법 +{count2}</Text>
                <Text style={{color:'gray',right:-250,top:100}}>분리순서 +{count3}</Text>
                <Image style={{right:-75,top:120,width:240,height:55,backgroundColor:'lightgray'}} source={require('../tabicon/Rectangle92.png')}/>
                <Text style={{color:'gray',right:-120,top:75,fontSize:25}}>총 점수 {count1+count2+count3}</Text>
                <Image style={{right:-250,top:34,width:50,height:50}} source={require('../tabicon/leaf.png')}/>
                <TouchableOpacity activeOpacity={0.2}
                    style={styles.team2}
                    onPress={showModal}
                >
                    <Image style={{top:70}} source ={require('../tabicon/Rectangle28.png')}/>
                    <Text style={{color:'white',top:30,fontSize:20}}>오답확인</Text>
                </TouchableOpacity>
                    <Portal>
                            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                <Text style={{justifyContent:'center',right:-75,fontSize:30}}>오답 노트</Text>
                                <View style={styles.container}>
                                    <View style={styles.case1}>
                                        <ScrollView style={styles.container}>
                                            <Card>
                                                <Card.Content>
                                                    <Title style={{fontSize:13}}>1-1 다음 물건이 분류되어야 할 항목은?</Title>
                                                </Card.Content>
                                                <Card.Cover source={require('../tabicon/119874.png')} />
                                                <Card.Actions>
                                                    <PaperButton onPress={()=> {
                                                        hideModal;
                                                        props.navigation.navigate("information");}}>보기
                                                    </PaperButton>
                                                </Card.Actions>
                                            </Card>
                                            <Card>
                                                <Card.Content>
                                                    <Title style={{fontSize:13}}>2-1 다음 중 올바른 분리수거는?</Title>
                                                </Card.Content>
                                                <Card.Cover source={require('../tabicon/119874.png')} />
                                                <Card.Actions>
                                                    <PaperButton>보기</PaperButton>
                                                </Card.Actions>
                                            </Card>
                                            <Button onPress={()=>props.navigation.navigate('IceBerg')} title="확인" />
                                        </ScrollView>
                                    </View>
                                </View>
                            </Modal>
                    </Portal>

            </View>
            </View>
        );
  }
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    case1: {
        flex: 1,
        backgroundColor: 'white',
    },
    case2: {
        flex: 3,
        backgroundColor: 'white'
    },
    team2: {
        position:'relative',
        width: 80,
        height: 80,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: -150,
        bottom: 0,
        borderRadius: 40,
        
          
    }
});
export default GameEnd;