import React, { useEffect, useState } from 'react';
import {ActivityIndicator, FlatList, RefreshControl, Text, TouchableOpacity, View} from 'react-native';
import { Card, Title} from 'react-native-paper';
import {Feather} from "@expo/vector-icons";



export let Home;
export default Home = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getClientes = async () => {
        try {
            const response = await fetch('http://192.168.0.10:8000/api/ver/clientes');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getClientes();
    }, []);



    return (
        <View style={{ flex: 1, padding: 24 }}>

            {isLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (


                            <View style={{ flex: 1, padding: 5 }}>
                                <Card onPress={() => {
                                    navigation.navigate('Cliente', {
                                        item: item,
                                    });
                                }}>
                                    <Card.Content>
                                        <Title>{item.nome}</Title>
                                    </Card.Content>
                                </Card>
                            </View>
                    )}
                    refreshControl={
                        <RefreshControl
                            refreshing={isLoading}
                            onRefresh={()=>getClientes()}
                        />
                    }
                />
            )}
            <TouchableOpacity
                style={{
                    borderWidth: 1,
                    borderColor: 'rgba(0,0,0,0.2)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 70,
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                    height: 70,
                    backgroundColor: '#fff',
                    borderRadius: 100,
                }}
                onPress={() => {
                    navigation.navigate('Cadastrar Cliente')}}>
                <Feather name="plus" size={30} color="black" />
            </TouchableOpacity>
        </View>
    );
};