import React from 'react';
import { StyleSheet, View,ImageBackground,TouchableOpacity,Image,Text} from 'react-native';
import { Portal, Searchbar,Modal} from 'react-native-paper';

const  Information = (props) => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white',padding: 20,width:300, height:500,right: -50, bottom: 0, };

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
                
               
                <TouchableOpacity activeOpacity={0.2}
                    style={styles.adornmentStyle}
                    onPress={showModal}
                >
                    <Image source ={require('../tabicon/plastic.png')}
                    style={styles.floatingButtonStyle}/>
                </TouchableOpacity>

                    <Portal>
                        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>             
                            <Text style={{justifyContent:'center',right:-70,fontSize:30,bottom:20}}>플라스틱</Text>
                            <Text style={{bottom:0}}>----------------------------------------------------------------- </Text>
                            <Image source ={require('../tabicon/plastic1.png')} style={styles.floatingButtonStyle2}/>
                            <Text>1. 용기에 든 내용물을 비운다.</Text>
                            <Text>2. 부착상표와 뚜껑등 다른 재질로 된 부분을 제거한다.</Text>
                            <Text>※여러재질이 섞여 분리가 어려운 제품은 종량제봉투에 담아 버린다</Text> 
                            <Text>ex: 알약 포장재, 카세트 테이프</Text>             
                        </Modal>
                    </Portal>

                <TouchableOpacity activeOpacity={0.2}
                    style={styles.adornmentStyle1}
                    onPress={() => props.navigation.navigate("Setup")}
                >
                    <Image source ={require('../tabicon/can.png')}
                    style={styles.floatingButtonStyle}/>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.2}
                    style={styles.adornmentStyle2}
                    onPress={() => props.navigation.navigate("Setup")}
                >
                    <Image source ={require('../tabicon/Paper.png')}
                    style={styles.floatingButtonStyle}/>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.2}
                    style={styles.adornmentStyle3}
                    onPress={() => props.navigation.navigate("Setup")}
                >
                    <Image source ={require('../tabicon/bottle.png')}
                    style={styles.floatingButtonStyle}/>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.2}
                    style={styles.adornmentStyle4}
                    onPress={() => props.navigation.navigate("Setup")}
                >
                    <Image source ={require('../tabicon/Garbage.png')}
                    style={styles.floatingButtonStyle}/>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.2}
                    style={styles.adornmentStyle5}
                    onPress={() => props.navigation.navigate("Setup")}
                >
                    <Image source ={require('../tabicon/Food waste.png')}
                    style={styles.floatingButtonStyle}/>
                </TouchableOpacity>


                          
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
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 300,
        height: 300,
    },
    floatingButtonStyle2: {
        resizeMode: 'contain',
        width: 200,
        height: 200,
        bottom:0,
        right:-30
    },
    adornmentStyle: {
        position:'relative',
        width: 300,
        height: 80,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: -50,
        bottom: -30,
        borderRadius: 40
    },
    adornmentStyle1: {
        position:'relative',
        width: 300,
        height: 80,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: -50,
        bottom: -50,
        borderRadius: 40
    },
    adornmentStyle2: {
        position:'relative',
        width: 300,
        height: 80,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: -50,
        bottom: -70,
        borderRadius: 40
    },
    adornmentStyle3: {
        position:'relative',
        width: 300,
        height: 80,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: -50,
        bottom: -90,
        borderRadius: 40,
    },
    adornmentStyle4: {
        position:'relative',
        width: 300,
        height: 80,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: -50,
        bottom: -110,
        borderRadius: 40,      
    },
    adornmentStyle5: {
        position:'relative',
        width: 300,
        height: 80,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: -50,
        bottom: -130,
        borderRadius: 40       
    },
    optionStyle: {
        position:'relative',
        width: 45,
        height:45,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
        bottom: 0,
        borderRadius: 40,
        backgroundColor:"black",
    },
});
export default Information;