import React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground ,TouchableOpacity, Button} from 'react-native';
import { Avatar,Modal,Portal,Button as PaperButton } from 'react-native-paper';

const  GuildS = (props) => {
    var cnt =0;
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white',padding: 20,width:300, height:300,right: -50, bottom: 0, };
    return(
        <View style={styles.container}>
            <View style={styles.case1}>
                <Text style={{fontSize:18,color:'gray',right:-70,bottom:-40}}>참여하고싶은 팀을 선택하세요!</Text>
            </View>
            <View style={styles.case2} >
                <TouchableOpacity activeOpacity={0.2}
                    style={styles.team1}
                    onPress={showModal}
                >
                    <Image source ={require('../tabicon/team1.png')}
                        style={styles.floatingButtonStyle}/>
                </TouchableOpacity> 

                <TouchableOpacity activeOpacity={0.2}
                    style={styles.team2}
                    onPress={showModal}
                >
                    <Image source ={require('../tabicon/team2.png')}
                        style={styles.floatingButtonStyle}/>
                </TouchableOpacity>
                
                    <Portal>
                            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                <Image source ={require('../tabicon/team2.png')}
                                    style={{right:-88,bottom:50,width:80,height:80}}/>
                                <Text style={{justifyContent:'center',right:-5,fontSize:18,bottom:30}}>'팽귄' 팀으로 결정하시겠습니까?</Text>
                                <Text style={{color:'gray',right:-35,bottom:25}}>(다음 이벤트까지 변경 불가능)</Text>
                                <PaperButton>
                                    <Text>아니오</Text>
                                </PaperButton>
                                <PaperButton>
                                    <Text>예</Text>
                                </PaperButton>
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
        flex: 1,
        backgroundColor: 'white',
        borderWidth: 30,
        borderColor: 'white',
        borderStyle:'solid'
    },
    cnt:{
        fontSize:20,
        bottom:0,
        right:0,
        color:'black'
    },
    floatingButtonStyle: {
        width: 100,
        height: 100,
    },
    team1: {
        position:'relative',
        width: 130,
        height: 130,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: -10,
        bottom: 100,
        borderRadius: 40,
           
    },
    team2: {
        position:'relative',
        width: 130,
        height: 130,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: -180,
        bottom: 230,
        borderRadius: 40,
          
    }
});
export default GuildS;