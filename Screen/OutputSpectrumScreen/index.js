import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OutputSpectrumScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Espectro do Sinal de Saída</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
