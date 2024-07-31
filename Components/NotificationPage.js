import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';

const NotificationPage = () => {
    const [notifications, setNotifications] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                // Log the URL to check if it's correct
                console.log('Fetching notifications from:', 'http://192.168.29.130:8080/api/notifications/getNotifications');
                
                const response = await fetch('http://192.168.29.130:8080/api/notifications/getNotifications');

                // Check if response is okay
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                // Parse JSON data
                const data = await response.json();
                console.log('Notifications fetched successfully:', data);
                setNotifications(data);
            } catch (error) {
                console.error('Error fetching notifications:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNotifications();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text style={styles.loadingText}>Loading notifications...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.error}>Error: {error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Notifications</Text>
            <FlatList
                data={notifications}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.notification}>
                        <Image 
                            source={{ uri: 'https://via.placeholder.com/50' }} // Placeholder for avatar or icon
                            style={styles.icon}
                        />
                        <View style={styles.notificationContent}>
                            <Text style={styles.notificationTitle}>{item.title}</Text>
                            <Text style={styles.notificationText}>{item.content}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
    },
    notification: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2, // For Android shadow
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    notificationContent: {
        flex: 1,
    },
    notificationTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    notificationText: {
        fontSize: 16,
        color: '#555',
        marginTop: 5,
    },
    error: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',
    },
    loadingText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
    },
});

export default NotificationPage;
