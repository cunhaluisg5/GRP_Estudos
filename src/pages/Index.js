import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Olá, esta é uma tela de teste!!!
                </Text>

                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate("TestScan") }}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            Testar Leitor
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20
    },
    button: {
        backgroundColor: '#053480',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20
    }
})

export default Index;