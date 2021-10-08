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


const CarDetails= ({navigation,route}) => {
    const [car,setCar] = useState(null)
    const [event,setEvent] = useState(null)


    function isfromMyEvent() {
        return (route.name === "My events");
    }
    useEffect(() => {
        console.log(route.params.event[1]);
        setEvent(route.params.event[1]);

        return function cleanup() {
            setEvent(null)
            console.log("cleanup")
        };
    }, [!event]);


    function confirmDelete() {
        console.log("test")
        if(Platform.OS ==='ios' || Platform.OS ==='android'){
            Alert.alert('Are you sure?', 'Do you want to delete the car?', [
                { text: 'Cancel', style: 'cancel' },
                // Vi bruger this.handleDelete som eventHandler til onPress
                { text: 'Delete', style: 'destructive', onPress: () => handleDelete() },
            ]);
        }
    }
    function handleEdit() {
        const event = route.params.event
        console.log(event);
        navigation.navigate('Edit event', {event});
        console.log("HandleEdit");

    }
    if(event == null)
    {
        return <Text>event is null </Text>
    }
    console.log(event);
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
/*
*           <Button onPress={handleEdit} title={"Edit"}/>
            <Button onPress={confirmDelete} title={"Confirm Delete"}/>
            *
            * {
                Object.entries(event).map((item,index)=>{
                    return(
                        <View style={styles.label} key={index}>
                            <Text >{item[1]}</Text>
                        </View>
                    )
                })
            }
* */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0eaea',
        width: "100%",
    },
    row: {

    },
});

export default CarDetails;