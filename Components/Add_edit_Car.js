import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import {SafeAreaView} from "react-native";
import {ScrollView} from "react-native-gesture-handler";
import firebase from "firebase";
import ImagePicker from 'react-native-image-picker';

const Add_edit_Car = ({navigation,route}) => {
    const initialStateEvent = { type: '', title: '', startingTime: '', image: '',desc:'',user:'' }
    const [newEvent,setNewEvent] = useState(initialStateEvent)


    function isEditEvent() {
        return (route.name === "Edit event");
    }


    const changeTextInputEvent = (name,event) => {
        setNewEvent({...newEvent, [name]: event});
    }

    useEffect(() => {
        console.log(isEditEvent());
        if(isEditEvent())
        {
            console.log(route.params.event[1]);
            const event = route.params.event[1];
            setNewEvent(event)
            console.log("newEvent" + newEvent);
            console.log("type1" + newEvent.type);

            return() => {
                //setNewEvent(initialStateEvent);
            }
        }
    }, []);


    function handleSave() {
        console.log("HandleSave?");
        newEvent.user = '1'; //Will be changed to the logged in user
        const {type, title, startingTime, image, desc,user} = newEvent;

        if (type.length === 0) {
            Alert.alert("type name is missing")
        } else if (title.length === 0) {
            Alert.alert("title name is missing")
        } else if (startingTime.length === 0) {
            Alert.alert("starting time name is missing")
        } else if (image.length === 0) {
            Alert.alert("image name is missing")
        } else if (desc.length === 0) {
            Alert.alert("description name is missing")
        } else {

            try {
                if (isEditEvent()) {
                    const rpc = route.params.event[0]
                    firebase.database().ref('/Event/'+rpc).set({
                        type: newEvent.type,
                        title: newEvent.title,
                        startingTime: newEvent.startingTime,
                        image: newEvent.image,
                        desc: newEvent.desc,
                        user: newEvent.user,
                    });

                    Alert.alert(`Saved edit car`);
                    setNewEvent(initialStateEvent)
                } else {
                    firebase
                        .database()
                        .ref('/Event/')
                        .push({type, title, startingTime, image, desc, user});
                    Alert.alert(`Saved`);
                    setNewEvent(initialStateEvent)
                }
            } catch (error) {
                console.log(`Error: ${error.message}`);
            }

        }
    }
    console.log("Type:" + newEvent.type)
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.header}> Create event </Text>

                <TextInput
                    value={newEvent.type}
                    placeholder='Type of event'
                    onChangeText={(event) => changeTextInputEvent('type',event)}
                    style={styles.TextInput}
                />
                <TextInput
                    value={newEvent.title}
                    placeholder='Title of event'
                    onChangeText={(event) => changeTextInputEvent('title',event)}
                    style={styles.TextInput}
                />
                <TextInput
                    value={newEvent.startingTime}
                    placeholder='Time of event'
                    onChangeText={(event) => changeTextInputEvent('startingTime',event)}
                    style={styles.TextInput}
                />
                <TextInput
                    value={newEvent.image}
                    placeholder='Image of event'
                    onChangeText={(event) => changeTextInputEvent('image',event)}
                    style={styles.TextInput}
                />
                <TextInput
                    value={newEvent.desc}
                    placeholder='Description of event'
                    onChangeText={(event) => changeTextInputEvent('desc',event)}
                    style={styles.TextInput}
                />

                <Button onPress={handleSave} title="Add Event" style={styles.loginBtn}/>
            </ScrollView>

        </SafeAreaView>
    )
}
/*

                <B

*            <Button onSubmit={handleSave()}> Add car</Button>
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0eaea',
        width: "100%",
    },

    image: {
        marginBottom: 40,
    },
    header: {
        fontWeight: 'bold',
    },

    TextInput: {
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:'10%',
        marginRight:'10%',
        backgroundColor:'#f0f0f5',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        width: "80%",
    },

    loginBtn: {
        marginLeft:'10%',
        marginRight:'10%',
        width: "80%",
        borderRadius: 25,
        height: 50,
        marginTop: '5%',
    },
});

export default Add_edit_Car;