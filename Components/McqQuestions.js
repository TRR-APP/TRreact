// Components/TRquestions.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TRquestions = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>TR Questions Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
    },
});

export default TRquestions;
