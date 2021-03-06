import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import ListOfEvents from './Components/ListOfEvents'
import EventOfEvent from './Components/EventOfEvent'
import Add_Edit_Event from './Components/Add_Edit_Event'
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";

import myEvents from "./Components/myEvents";
export default function App() {

// Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBvl7ph8mETPzixy5KPhmw9maysyTbP7Ks",
        authDomain: "mandatory-activity-2-4a42a.firebaseapp.com",
        databaseURL: "https://mandatory-activity-2-4a42a-default-rtdb.firebaseio.com",
        projectId: "mandatory-activity-2-4a42a",
        storageBucket: "mandatory-activity-2-4a42a.appspot.com",
        messagingSenderId: "324123184606",
        appId: "1:324123184606:web:0fe0f4806b8ecb3ce4614f"
    };

// Initialize Firebase
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();
//Create Stack navigator
    function stackNavigator() {
        return(
            <Stack.Navigator style={{backgroundColor: '#2c959e'}}>
                <Stack.Screen name="List of Events" component={ListOfEvents} options={{
                    title: 'List of Events',
                    headerStyle: {
                        backgroundColor: '#2c959e',
                    },
                    headerTintColor: '#050505',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}/>
                <Stack.Screen name="EventDetails" component={EventOfEvent} options={{
                    title: 'Details',
                    headerStyle: {
                        backgroundColor: '#2c959e',
                    },
                    headerTintColor: '#050505',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}/>

                <Stack.Screen name="Edit event" component={Add_Edit_Event} options={{
                    title: 'Edit Events',
                    headerStyle: {
                        backgroundColor: '#2c959e',
                    },
                    headerTintColor: '#050505',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}/>
                <Stack.Screen name="My events" component={myEvents} options={{
                    title: 'my Events',
                    headerStyle: {
                        backgroundColor: '#2c959e',
                    },
                    headerTintColor: '#050505',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}/>
            </Stack.Navigator>

        );}
//Create Stack navigator for My events
    function stackNavigatorMyEvents() {
        return(
            <Stack.Navigator style={{backgroundColor: '#2c959e'}}>
                <Stack.Screen name="MyEvents" component={myEvents} options={{
                    title: 'List of my events',
                    headerStyle: {
                        backgroundColor: '#2c959e',
                    },
                    headerTintColor: '#050505',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}/>
            </Stack.Navigator>
        );}
//Create Stack navigator for Created events
    function stackNavigatorCreateEvent() {
        return(
            <Stack.Navigator style={{backgroundColor: '#2c959e'}}>
                <Stack.Screen name="Add event" component={Add_Edit_Event} options={{
                    title: 'Create a new event',
                    headerStyle: {
                        backgroundColor: '#2c959e',
                    },
                    headerTintColor: '#050505',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}/>
            </Stack.Navigator>
        );}
    //Creating the bottom Tab, with the correct Stack Navigators.
    //TODO: Create component with the different Stack navigators for overview
    return (
        <View style={styles.container}>
            <NavigationContainer style={styles.tab}>
                <Tab.Navigator>
                    <Tab.Screen name={'Home'} component={stackNavigator} options={{tabBarIcon: () => ( <Ionicons name="home" size={20} />),headerShown:null}}/>
                    <Tab.Screen name={'Add'} component={stackNavigatorCreateEvent} options={{tabBarIcon: () => ( <Ionicons name="add" size={20} />),headerShown:null}}/>
                    <Tab.Screen name={'My events'} component={stackNavigatorMyEvents} options={{tabBarIcon: () => ( <Ionicons name="home" size={20} />),headerShown:null}}/>
                </Tab.Navigator>
            </NavigationContainer>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c959e',

    },
    tab: {
        backgroundColor: '#2c959e',
    },

});
