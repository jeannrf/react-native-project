import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';

import icon from './assets/icon.png';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={{ color: 'white' }}>Hola, esta es la app de metacritic :D </Text>
      <Button title="Pulsa aquí" onPress={() => alert('Has pulsado el botón')} />
      <TouchableHighlight
        underlayColor="red"
        onPress={() => alert('Has pulsado el botdasdadón')}
      >
        <Text>Pulsa aquí</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
