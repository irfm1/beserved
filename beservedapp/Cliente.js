import * as React from 'react';
import {Text, View, Button, TouchableOpacity, ActivityIndicator, FlatList, RefreshControl} from 'react-native';
import {Card, Paragraph, List} from "react-native-paper";
import {Feather} from "@expo/vector-icons";
import {useEffect, useState} from "react";



export function Cliente({ route, navigation }) {
    /* 2. Get the param */
    const { item } = route.params;
    const [expanded, setExpanded] = useState(true);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getServicos = async () => {
        try {
            const response = await fetch('http://192.168.0.10:8000/api/ver/'+item.id+'/servicos');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    function setStatus(id) {
        try{
            fetch('http://192.168.0.10:8000/api/mudar/servico/status/', {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id,
                })
            }).then(() => {
                getServicos();
            });
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getServicos();
    }, [item.id]);

    const handlePress = () => setExpanded(!expanded);

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <View style={{ flex: 1}}>
                <Card>
                    <Card.Content>
                        <Text>{item.nome}</Text>
                        <Text>{item.celular}</Text>
                        <Text>{item.telefone}</Text>
                        <Paragraph>
                            {item.endereco}, {item.numero}{"\n"}

                            {item.bairro}, {item.cidade}{"\n"}

                            {item.complemento}{"\n"}

                        </Paragraph>
                    </Card.Content>
                </Card>
            </View>
            <View style={{ flex: 3}}>
                <Card>
                    <Card.Content>

                        <List.Section title="Serviços" >
                            {isLoading ? <ActivityIndicator/> : (
                            <FlatList
                                data={data}
                                keyExtractor={({ id }, index) => id}
                                renderItem={({ item }) => (
                                    <List.Item
                                        title={item.tipo}
                                        description={item.descricao}
                                        left={props => <TouchableOpacity
                                            {...props}
                                            onPress={() => {
                                                setStatus(item.id)
                                            }}
                                        >
                                            {item.status === 'Pago' ? <List.Icon {...props} icon="check-circle" color="green" />: <List.Icon {...props} icon="check-circle"  />}
                                       </TouchableOpacity>
                                        }
                                        right={props => <Text {...props}>{'R$ ' + item.valor}</Text>}
                                    />

                            // <List.Accordion
                            //     title="Janeiro"
                            //     left={() => <Feather name="package" size={24} color="black" />}
                            //     expanded={!expanded}
                            //     onPress={handlePress}>
                            //     <List.Item title="First item" description="teste"    left={() => <Feather name="tool" size={24} color="black" />} />
                            //     <List.Item title="Second item" description="teste"    left={() => <Feather name="tool" size={24} color="black" />}/>
                            // </List.Accordion>
                                    )}
                                refreshControl={
                                    <RefreshControl
                                        //refresh control used for the Pull to Refresh
                                        refreshing={isLoading}
                                        onRefresh={()=>getServicos()}
                                    />
                                }
                                />
                            )}
                        </List.Section>

                    </Card.Content>
                </Card>
            </View>
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
                    navigation.navigate('ServicoForm', {
                        item: item,
                    });
                }}
            >
                <Feather name="plus" size={30} color="black" />
            </TouchableOpacity>
        </View>
    );
}
