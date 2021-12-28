import Animated, { useSharedValue, useAnimatedStyle, withSequence, withTiming, withSpring, withRepeat } from 'react-native-reanimated';

import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Pressable, Button, Image, ScrollView, FlatList, SafeAreaView, Dimensions } from 'react-native';
import { Modal, Avatar, Title, Paragraph, List, Button as PaperButton, ActivityIndicator, Colors, Badge, Card, BottomNavigation, IconButton, Portal } from 'react-native-paper';



const ReanimatedTab = (props) => {
    const offsetX = useSharedValue(-100);
    const offsetY = useSharedValue(0);
    const borderRadius = useSharedValue(0);
    
        
    const myStyle= useAnimatedStyle( ()=> {
        return { transform: [{translateX: offsetX.value}, {translateY: offsetY.value}],
            borderRadius: borderRadius.value
        };
    });

    const animate = () => {
        offsetX.value = 
            withSequence( 
                withSpring(-100, { duration: 100}),
                withRepeat(
                    withSequence( 
                        withTiming(100, {duration: 500}),                    
                        withTiming(-100, {duration: 500})
                    ),
                -1, true)
            );
        borderRadius.value = 
            withSequence(
                withSpring(0, {duration: 100}),
                withRepeat( withTiming(50, {duration: 1000}), -1, true)
            );
    }
        
    return (
        <View style={[styles.container, styles.centerContainer]} >
            <Animated.View style={[styles.box, myStyle, {borderColor: 'red', borderWidth: 1}]} >
            </Animated.View>
            <PaperButton onPress={animate} > 움직이기 </PaperButton>
        </View>
    );
}

export default ReanimatedTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
    },
    centerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    safeAreaView: {
      flex: 1,
      marginTop: 24
    },
    logo: {
        width: 66,
        height: 58,
    },
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
    cards: {
        flex: 10, 
        flexDirection: 'row', 
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        overflow: 'hidden'
    },
    card: {
        width: 150, 
        height: 200, 
        padding: 4, 
        margin: 16, 
        borderRadius: 20
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'pink'
    }
});