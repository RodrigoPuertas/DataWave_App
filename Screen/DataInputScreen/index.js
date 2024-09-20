import * as React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function DataInputScreen() {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrada de Dados</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor do sinal"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Calcular" onPress={() => console.log('Calcular valor')} />
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
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 20,
    paddingHorizontal: 10,
  },
});
