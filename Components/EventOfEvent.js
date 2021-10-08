import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {Alert, Button, Platform, StyleSheet, Text, View, Image} from 'react-native';
import firebase from "firebase";
import styled from 'styled-components/native'

const SectionDetails= styled.View`
  margin-top: 1%;
  margin-left: 10%;
  margin-right:10%;
  background-color:#f0f0f5;
  border-radius:10px;
  width: 80%;

`;


const EventOfEvent= ({navigation,route}) => {
    const [event,setEvent] = useState(null)

    useEffect(() => {
        setEvent(route.params.event[1]);

        return function cleanup() {
            setEvent(null)
        };
    }, [!event]);


    function handleEdit() {
        const event = route.params.event
        navigation.navigate('Edit event', {event});

    }
    if(event == null)
    {
        return <Text>event is null </Text>
    }
    return (
        <View style={styles.container}>
            <SectionDetails>
                <Text>{event.type}</Text>
                <Text>{event.title}</Text>
                <Text>{event.startingTime}</Text>
                <Image source={{ uri: event.image }} style={{ width: '40%', height: 159}} />
                <Text>{event.desc}</Text>
            </SectionDetails>
            {
                (event.user==='1') ? <Button onPress={handleEdit} title={"Edit"}/> : <Text> </Text>
            }
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0eaea',
        width: "100%",
    },
    row: {

    },
});

export default EventOfEvent;