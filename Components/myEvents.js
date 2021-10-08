import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {Alert, FlatList, StyleSheet, Text, View, Image} from 'react-native';
import firebase from "firebase";
import {TouchableOpacity} from "react-native-gesture-handler";

const myEvents= ({navigation}) => {
    const [events,setEvents] = useState([])
//Get all events
    //TODO: Change with current user
    useEffect(() => {
        firebase
            .database()
            .ref('/Event').orderByChild("user").equalTo('1') //change based on the user, when login is made
            .on('value', snapshot => {
                setEvents(snapshot.val())
            });
        console.log(events)
        if(!events)
        {
            Alert.alert("No events found please add new event")
        }

        //};
    }, [!events]);

    const handleSelectEvent = id => {
        const event = Object.entries(events).find( car => car[0] === id /*id*/)
        navigation.navigate('EventDetails', {event});
    }
    let eventsArray =[]
    let eventsKeys = []
    if(events) {
        eventsArray = Object.values(events);
        eventsKeys = Object.keys(events);
    }
    return (
        <View style={styles.container}>
            {(eventsArray.length===0)
                ? <Text>Loading</Text>
                :  <FlatList data={eventsArray} renderItem={({item,index}) => {
                    return(
                        <TouchableOpacity style={styles.button} onPress={() => handleSelectEvent(eventsKeys[index])}>
                            <View>
                                <Text style={styles.label}> {item.title} </Text>
                                <Image source={{ uri: item.image }} style={{ width: '100%', height: 159}} />
                            </View>
                        </TouchableOpacity>)
                }
                } keyExtractor={(item, index) => eventsKeys[index]}/>
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
    button: {
        marginTop:10,
        paddingTop:1,
        paddingBottom:15,
        marginLeft:30,
        marginRight:30,
        backgroundColor:'#f0f0f5',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        width: "80%",
    },
    label:{
        fontWeight:'bold',
        textAlign:'center',
        fontFamily:'monospace',
    },
});
export default myEvents;