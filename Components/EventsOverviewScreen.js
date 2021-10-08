import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, Button, Image} from 'react-native';
import styled from 'styled-components/native'
import {TextInput} from "react-native-web";


const Section1= styled.View`
  margin: 4px;
  height: 50px;
  background-color: #45959b;
  border-radius: 15px;
`;


const EventOverviewScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>

            <Text style={{opacity:0.5}}>December 22/12</Text>
            <Text>Explore events</Text>
            <Image source={{ uri: "https://i.imgur.com/v1bjhXG.jpeg" }} style={{ width: 305, height: 159 }} />
        <Section1>
            <Text style={{opacity:0.5}}>December 22/12</Text>
        </Section1>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c959e',
        //justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
            flexDirection:'row',
            justifyContent:'space-between',

        }
});

export default EventOverviewScreen;