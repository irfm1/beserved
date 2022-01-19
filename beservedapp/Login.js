import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Image, Button, TouchableNativeFeedback, Platform} from 'react-native';
import {Home} from "./Home";

export function Login({navigation})
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
            <View style={styles.container}>
            <StatusBar style="auto" />
            <Image style={styles.image} source={require('./assets/adaptive-icon.png')}/>
            <Text style={styles.title}>Login</Text>

                <TextInput style={styles.input} placeholder=" Email"
                           onChangeText={email => setEmail(email)}
                           defaultValue={email}
                />
                <TextInput style={styles.input} placeholder=" Password"
                           onChangeText={password => setPassword(password)}
                           defaultValue={password}
                />
                <TouchableNativeFeedback
                    onPress={() => navigation.replace('EmptyForm')}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Entrar {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
                    </View>
                </TouchableNativeFeedback>
                <Text style={styles.text}>Esqueceu a Senha?</Text>
                <Text style={styles.text}>Não tem um Login?</Text>
                <TouchableNativeFeedback
                    onPress={() => navigation.navigate('UserForm')}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                    <View style={styles.buttonCreate}>
                        <Text style={styles.buttonTextCreate}>Criar {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
                    </View>
                </TouchableNativeFeedback>

            </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text:{
        fontSize: 20,
        marginBottom: 20,
    },
    input:{
        width: 300,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 5,
    },
    image:{
        width: 300,
        height: 300,
        marginBottom: 20,
    },
    button:{
        width: 300,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText:{
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        marginTop: 5,
    },
    buttonCreate:{
        width: 300,
        height: 40,
        marginBottom: 20,
    },
    buttonTextCreate:{
        fontSize: 20,
        textAlign: 'center',
        color: '#6c59ec',
        marginTop: 5,
    },
});