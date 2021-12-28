import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Pressable, Button, Image, ScrollView, FlatList, SafeAreaView, Dimensions } from 'react-native';
import { Modal, Avatar, Title, Paragraph, List, Button as PaperButton, ActivityIndicator, Colors, Badge, Card, BottomNavigation, IconButton, Portal } from 'react-native-paper';
import Animated, {useAnimatedStyle, useAnimatedScrollHandler, withSpring, interpolateColor, withTiming, useSharedValue, Easing} from 'react-native-reanimated';
import { PanGestureHandler} from 'react-native-gesture-handler';
const Tab1 = ({jumpTo}, ...props) => {
    const [ count, setCount ] = useState(0);
    const [ color, setColor ] = useState('white');
    const myHeight = useSharedValue(50);
    const myColor = useSharedValue('white');
    const [ maxHeight, setMaxHeight ] = useState(0);
    const y = useSharedValue(0);
   
    const myStyle = {
        flex: 1, 
        borderWidth: 2, borderColor: 'red', borderStyle: 'solid',
        padding: 24
    };

    const scrollHandler = useAnimatedScrollHandler( (event)=> {
        y.value = event.contentOffset.y;
    });

    const scrollStyle = useAnimatedStyle( ()=> {
        return {
            backgroundColor: interpolateColor(y.value, [-50, 0], ['green', 'yellow'])
        }
    }, [y.value]);

    const heightStyle = useAnimatedStyle(()=> {
        console.log(myHeight.value, maxHeight);
        return {
            height: myHeight.value,
            backgroundColor: interpolateColor(myHeight.value, [50, maxHeight], ['yellow', 'red'])
        }
    });

    const animateHeight = ()=> {
        myHeight.value = withSpring(myHeight.value == 50 ? maxHeight : 50, { duration: 1000 });
    }

    const onLayout = (event) => {
        setMaxHeight(event.nativeEvent.layout.height);
    }
    
    return    (
        <View style={{flex:1}} onLayout={onLayout}>
            <View style={[styles.border, {flex: 3, flexDirection: 'row', 
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: 'lightblue'}]}>
                <PaperButton style={styles.button}>1</PaperButton>
                <PaperButton style={styles.button}>2</PaperButton>
                <PaperButton style={styles.button} onPress={()=> {
                    jumpTo('animationTab');
                }}>AnimationTab</PaperButton>
                <PaperButton style={styles.button}>4</PaperButton>
                <PaperButton style={styles.button}>5</PaperButton>
                <PaperButton style={styles.button}>6</PaperButton>
            </View>
            
            <Animated.ScrollView scrollEventThrottle={16} onScroll={scrollHandler} style={[styles.border, {flex: 5, backgroundColor: 'yellow'}]}>
                <Text>본문</Text>
                <Text>BJ Seo</Text>
                <View style={{backgroundColor: color}}>
                    <Text>
                        {count}
                    </Text>
                </View>
                <PaperButton onPress={()=> {
                    setCount( count + 1 );
                    setColor( color == 'red' ? 'white' : 'red');
                    console.log('count', count);
                }}>
                    카운트값 증가
                </PaperButton> 
            </Animated.ScrollView>
            <Animated.View style={[styles.border, heightStyle, scrollStyle]} >
                <Text>3번째</Text>
                <PaperButton onPress={()=>animateHeight()} >
                    키우기
                </PaperButton>
            </Animated.View>
        </View>
    );
}

export default Tab1;

const styles = StyleSheet.create({
    border: {
        borderWidth: 1,
        borderColor: 'green',
        borderStyle: 'dotted'
    },
    borderChild: {
        borderWidth: 1,
        borderColor: 'pink',
        borderStyle: 'dotted'
    },
    button: {
        marginVertical: 16, 
        width: 150, 
        backgroundColor: 'tomato'
    },
})