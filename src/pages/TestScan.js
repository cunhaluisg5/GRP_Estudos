import React, { Component } from 'react';
import { View } from 'react-native';

import Scan from '../components/Scan';

class TestScan extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Scan />
            </View>
        )
    }
}

export default TestScan