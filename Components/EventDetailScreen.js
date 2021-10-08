import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const EventDetailScreen = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <Text style={{ color: '#fff', fontSize: 30 }}>EventDetail</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c959e',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default EventDetailScreen;