
import {StyleSheet, Text, View, TextInput, Image, Platform, TouchableNativeFeedback} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, {useState} from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export function ServicoForm({route, navigation}) {
    const [tipo, setTipo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [status, setStatus] = useState('Em Aberto');
    const { item } = route.params;


    function setServico() {
        try{
        fetch('http://192.168.0.10:8000/api/criar/servico', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tipo: tipo,
                descricao: descricao,
                valor: valor,
                status: status,
                cliente_id: item.id
            })
        }).then(() => {
            navigation.goBack();
        })
        } catch(error){
            console.log(error);
        }
    }

    return (
        <KeyboardAwareScrollView>
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Cadastro de Servico</Text>
                <TextInput style={styles.input} placeholder="Descrição"
                           onChangeText={descricao => setDescricao(descricao)}
                           defaultValue={descricao}/>

                <View style={{flexDirection: 'row'}}>
                    <TextInput style={{
                        flex: 4,
                        borderWidth: 1,
                        borderColor: '#6c6b6b',
                        width: '100%',
                        padding: 10,
                        marginBottom: 10,}} placeholder="Tipo"
                               onChangeText={tipo => setTipo(tipo)}
                               defaultValue={tipo}/>
                    <TextInput style={{
                        flex: 4,
                        borderWidth: 1,
                        borderColor: '#6c6b6b',
                        width: '100%',
                        padding: 10,
                        marginBottom: 10,}} placeholder="Valor"
                               onChangeText={valor => setValor(valor)}
                               defaultValue={valor}/>
                </View>
                {/* create a Picker for status */}
                <Picker
                    selectedValue={status}
                    style={styles.input}
                    onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
                >
                    <Picker.Item label="Em Aberto" value="Em Aberto" />
                    <Picker.Item label="Pago" value="Pago" />
                </Picker>



                <TouchableNativeFeedback
                    onPress={() => setServico()}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Criar {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
                    </View>
                </TouchableNativeFeedback>

            </View>
        </View>
        </KeyboardAwareScrollView>
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
