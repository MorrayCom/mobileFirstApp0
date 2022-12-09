import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import { AsyncStorage } from '@react-native-async-storage/async-storage';


export default function App() {

    const [phone, setPhone] = useState('')

    const getData = async () => {
        try {
           const value = await AsyncStorage.getItem('@Storage_Key') 
           if(value != null){
            setPhone(JSON.parse(value))
           }
        } catch (e) {
            console.log(e, 'log: Erreurs pendant la lecture !')
        }
    }
    return(
        <View style={styles.container}>
            <StatusBar style='auto' />
            <Text>-----------------------</Text>

            <Button
                onPress={() => getData()}
                title="Get Data"
            />
            <Text>-----------------------</Text>

            <Button
                onPress={() => removeData()}
                title="Remove Data"
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8CF1B4',
        alignItems: 'center',
        justifyContent: 'center',
    },
});