import { StatusBar } from "expo-status-bar";

import { StyleSheet, View, Text, Image } from "react-native-web";

export default function Register() {


    return(
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={{
                flexDirection: 'column',
            }}>
                <View style={{
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 90,
                        color: 'white',
                    }}>Register</Text>
                </View>

            </View>
            <View>
                <Image src={require("angular.jpg")} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#03242C',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10
    },
});

