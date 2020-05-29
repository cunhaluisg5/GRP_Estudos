import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Olá, esta é uma tela de teste!!!
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'        
    },
    text: {
        fontSize: 20
    }
})

export default Index;