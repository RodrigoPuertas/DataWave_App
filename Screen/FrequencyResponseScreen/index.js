import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FrequencyResponseScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resposta em Frequência do Canal de Comunicações</Text>
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
