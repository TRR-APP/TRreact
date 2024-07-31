// Components/HomeScreen.js
import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.home} source={require('../assets/home.png')} />
                <TouchableOpacity onPress={() => navigation.navigate('NotificationPage')}>
                    <Image style={styles.not} source={require('../assets/noti.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={styles.boxes1}>
                    <View style={styles.box1}>
                        <TouchableOpacity onPress={() => navigation.navigate('TRquestions')}>
                            <Text style={styles.botext}>TR Questions</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.box1}>
                        <TouchableOpacity onPress={() => navigation.navigate('HRQuestions')}>
                            <Text style={styles.botext}>HR Questions</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.boxes2}>
                    <View style={styles.box1}>
                        <TouchableOpacity onPress={() => navigation.navigate('McqQuestions')}>
                            <Text style={styles.botext}>MCQ practice questions</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.boxm}>
                        <TouchableOpacity onPress={() => navigation.navigate('Mockinterviews')}>
                            <Text style={styles.botext}>Mock interviews</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.box2}>
                    <TouchableOpacity onPress={() => navigation.navigate('Workshopareas')}>
                        <Text style={styles.botext}>Workshop areas</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('FAQs')}>
                    <Text style={styles.fotext}>FAQ's</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Blog')}>
                    <Text style={styles.fotext}>Blogs</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Placements')}>
                    <Text style={styles.fotext}>Placements</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Contact Us')}>
                    <Text style={styles.fotext}>Contact Us</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('About Us')}>
                    <Text style={styles.fotext}>About Us</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20,
    },
    home: {
        width: 30,
        height: 30,
    },
    not: {
        width: 30,
        height: 30,
    },
    body: {
        flex: 1,
        width: '100%',
        padding: 20,
    },
    boxes1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    box1: {
        flex: 1,
        margin: 10,
        padding: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
    },
    botext: {
        fontSize: 18,
    },
    boxes2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    boxm: {
        flex: 1,
        margin: 10,
        padding: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
    },
    box2: {
        flex: 1,
        margin: 10,
        padding: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        padding: 20,
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    fotext: {
        fontSize: 16,
    },
});

export default HomeScreen;
