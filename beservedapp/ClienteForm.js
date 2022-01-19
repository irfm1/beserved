
import {StyleSheet, Text, View, TextInput, Image, Platform, TouchableNativeFeedback} from 'react-native';
import React, {useState} from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export function ClienteForm({navigation}) {
    const [nome, setNome] = useState('');
    const [cpf, setCPF] = useState('');
    const [cnpj, setCNPJ] = useState('');
    const [razao, setRazao] = useState('');
    const [rg, setRG] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [celular, setCelular] = useState('');
    const [cep, setCEP] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');

    function setCliente() {

        fetch('http://192.168.0.10:8000/api/criar/cliente', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                cpf: cpf,
                cnpj: cnpj,
                razao: razao,
                rg: rg,
                email: email,
                telefone: telefone,
                celular: celular,
                cep: cep,
                endereco: endereco,
                numero: numero,
                complemento: complemento,
                bairro: bairro,
                cidade: cidade
            })
        }).then(navigation.replace('EmptyForm'));
    }

    return (
        <KeyboardAwareScrollView>
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.title}>Cadastro de Cliente</Text>
                <TextInput style={styles.input} placeholder=" Nome"
                           onChangeText={nome => setNome(nome)}
                           defaultValue={nome}
                />
                <View style={{flexDirection: 'row'}}>
                <TextInput style={{
                    flex: 4,
                    borderWidth: 1,
                    borderColor: '#6c6b6b',
                    width: '100%',
                    padding: 10,
                    marginBottom: 10,}} placeholder=" CPF"
                           onChangeText={cpf => setCPF(cpf)}
                           defaultValue={cpf}
                />
                <TextInput style={{
                    flex: 4,
                    borderWidth: 1,
                    borderColor: '#6c6b6b',
                    width: '100%',
                    padding: 10,
                    marginBottom: 10,}} placeholder=" CNPJ"
                           onChangeText={cnpj => setCNPJ(cnpj)}
                           defaultValue={cnpj}
                />
                </View>
                <TextInput style={styles.input} placeholder=" Razão Social"
                           onChangeText={razao => setRazao(razao)}
                           defaultValue={razao}
                />
                <TextInput style={styles.input} placeholder=" RG"
                           onChangeText={rg => setRG(rg)}
                           defaultValue={rg}
                />
                <TextInput style={styles.input} placeholder=" Email"
                           onChangeText={email => setEmail(email)}
                           defaultValue={email}
                />
                <View style={{flexDirection: 'row'}}>
                <TextInput style={{
                    flex: 4,
                    borderWidth: 1,
                    borderColor: '#6c6b6b',
                    width: '100%',
                    padding: 10,
                    marginBottom: 10,}}  placeholder=" Telefone"
                           onChangeText={telefone => setTelefone(telefone)}
                           defaultValue={telefone}
                />
                <TextInput style={{
                    flex: 4,
                    borderWidth: 1,
                    borderColor: '#6c6b6b',
                    width: '100%',
                    padding: 10,
                    marginBottom: 10,}}  placeholder=" Celular"
                           onChangeText={celular => setCelular(celular)}
                           defaultValue={celular}
                />
                </View>
                <TextInput style={styles.input} placeholder=" CEP"
                           onChangeText={cep => setCEP(cep)}
                           defaultValue={cep}
                />
                <View style={{flexDirection: 'row'}}>
                <TextInput style={{
                    flex: 4,
                    borderWidth: 1,
                    borderColor: '#6c6b6b',
                    width: '100%',
                    padding: 10,
                    marginBottom: 10,}} placeholder=" Endereço"
                           onChangeText={endereco => setEndereco(endereco)}
                           defaultValue={endereco}
                />
                <TextInput style={{
                    flex: 1,
                    borderWidth: 1,
                    borderColor: '#6c6b6b',
                    width: '100%',
                    padding: 10,
                    marginBottom: 10,}}  placeholder=" Número"
                           onChangeText={numero => setNumero(numero)}
                           defaultValue={numero}
                />
                </View>
                <TextInput style={styles.input} placeholder=" Complemento"
                           onChangeText={complemento => setComplemento(complemento)}
                           defaultValue={complemento}
                />
                <View style={{flexDirection: 'row'}}>
                <TextInput style={{
                    flex: 3,
                    borderWidth: 1,
                    borderColor: '#6c6b6b',
                    width: '100%',
                    padding: 10,
                    marginBottom: 10,}} placeholder=" Bairro"
                           onChangeText={bairro => setBairro(bairro)}
                           defaultValue={bairro}
                />
                <TextInput style={{
                    flex: 3,
                    borderWidth: 1,
                    borderColor: '#6c6b6b',
                    width: '100%',
                    padding: 10,
                    marginBottom: 10,}} placeholder=" Cidade"
                           onChangeText={cidade => setCidade(cidade)}
                           defaultValue={cidade}
                />
                </View>


                <TouchableNativeFeedback
                    onPress={() => setCliente()}
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
