import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Scan from '../Components/Scan'

class TestQRCode extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Scan />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131313'
    }
})

export default TestQRCode