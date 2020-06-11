import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Vibration, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner'

export default props => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Solicitando permissão da câmera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso à câmera</Text>;
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Vibration.vibrate()
    Alert.alert('Resultado', `Tipo: ${typeData(type)} \nConteúdo: ${data}`);
  };

  const typeData = (type) => {
    switch (type) {
      case 1: case 2: case 8: case 32: case 512: case 1024:
        return 'Código de Barras'
      case 256:
        return 'QRCode'
      default:
        return 'Indefinido'
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFill} />
      {scanned && <Button title={'Ler novamente'} onPress={() => setScanned(false)} />}
    </View>
  )
}