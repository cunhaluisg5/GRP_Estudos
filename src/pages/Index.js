import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, Text, Button } from '../styles/Style';

class Index extends Component {
    render() {
        return (
            <Container>
                <Text color={'black'}> Olá, esta é uma tela de teste!!! </Text>

                <TouchableOpacity
                    onPress={() => { this.props.navigation.navigate("TestScan") }}>
                    <Button>
                        <Text color={'white'}> Testar Leitor </Text>
                    </Button>
                </TouchableOpacity>
            </Container>
        )
    }
}

export default Index;