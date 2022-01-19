
import {StyleSheet, Text, View, TextInput, Image, Platform, TouchableNativeFeedback} from 'react-native';
import React, {useState} from "react";


export function UserForm({navigation}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput style={styles.input} placeholder=" Name"
                           onChangeText={name => setName(name)}
                           defaultValue={name}
                />

                <TextInput style={styles.input} placeholder=" Email"
                           onChangeText={email => setEmail(email)}
                           defaultValue={email}
                />

                <TextInput style={styles.input} placeholder=" Password"
                           onChangeText={password => setPassword(password)}
                           defaultValue={password}
                />

                <TouchableNativeFeedback
                    onPress={() => navigation.navigate('UserForm')}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Criar {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
                    </View>
                </TouchableNativeFeedback>

            </View>
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
    form: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#6c6b6b',
        width: '100%',
        padding: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#6c6b6b',
        padding: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    }
});
