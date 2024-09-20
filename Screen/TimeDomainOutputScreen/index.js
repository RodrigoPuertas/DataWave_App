import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TimeDomainOutputScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sinal de Saída (Domínio do Tempo)</Text>
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
