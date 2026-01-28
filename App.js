import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import icon from './assets/icon.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://files.idyllic.app/files/static/2494807?width=256&optimizer=image' }} style={{ width: 256, height: 256 }} />
      <Text style={{ color: 'white' }}>Hola, esta es la app de metacritic :D </Text>
      <StatusBar style="auto" />
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
