
import {StyleSheet, Text, View, ScrollView, TextInput, Image, Platform, TouchableNativeFeedback} from 'react-native';
import React, {useState} from "react";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import {Home} from "./Home";
import {Cliente} from "./Cliente";
import {ClienteForm} from "./ClienteForm";


const Drawer = createDrawerNavigator();

export function EmptyForm({navigation}) {

    function CustomDrawerContent(props) {
        return (
            <View style={{ flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={{ borderColor: 'gray',
                    borderWidth: 1,
                    marginBottom: 20,
                    borderRadius: 5, }}>
                    <Text style={{  textAlign: 'center', fontSize: 24 }}>
                        Menu
                    </Text>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
                <TouchableNativeFeedback
                    onPress={() => navigation.replace('Login')}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Sair {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
return (
        <View style={{ flex: 1}}>
        <Drawer.Navigator initialRouteName="Home"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name={'Home'} component={Home} />
            <Drawer.Screen name={'Cliente'} component={Cliente} />
            <Drawer.Screen name={'Cadastrar Cliente'} component={ClienteForm} />
        </Drawer.Navigator>
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
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    button: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        backgroundColor: '#00a680',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
