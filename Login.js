// LoginPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LoginPage = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        if (name === 'Eric Atsu' && email === 'eric@gmail.com') {
            navigation.navigate('homepage');
        } else {
            Alert.alert('Invalid credentials', 'Please enter correct name and email.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Jobizz</Text>
            <Text style={styles.welcomeText}>Welcome Back 👋</Text>
            <Text style={styles.subText}>Let's log in. Apply to jobs!</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>Or continue with</Text>
            <View style={styles.iconContainer}>
            </View>
            <Text style={styles.registerText}>
                Haven’t got an account? <Text style={styles.registerLink}>Register</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#3B82F6',
        marginBottom: 10,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subText: {
        fontSize: 16,
        color: '#6B7280',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#3B82F6',
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    orText: {
        textAlign: 'center',
        marginBottom: 10,
        color: '#9CA3AF',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    icon: {
        width: 40,
        height: 40,
        marginHorizontal: 10,
    },
    registerText: {
        textAlign: 'center',
        color: '#6B7280',
    },
    registerLink: {
        color: '#3B82F6',
        fontWeight: 'bold',
    },
});

export default LoginPage;
