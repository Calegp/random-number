import {React, useState} from 'react'
import {SafeAreaView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Keyboard} from 'react-native';

export default function App() {
  const [number, setNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(0);

  function handleNumber() {
    const newNumber = Math.ceil(Math.random() * maxNumber);
    setNumber(newNumber);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={style.container}>
        <Text style={style.number}>{number}</Text>
        <Text style={style.title}>Digite o valor máximo a ser sorteado:</Text>
        <TextInput contextMenuHidden={true} keyboardType='numeric' style={style.input} onChangeText={max => setMaxNumber(max)}/>
        <TouchableOpacity onPress={handleNumber} style={style.button}>
          <Text style={style.buttonTitle}>Sortear número</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 16
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
    backgroundColor: '#FFFFFF',
    width: '30%',
    textAlign: 'center'
  },
  number: {
    fontSize: 120,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 40
  },
  button: {
    backgroundColor: '#FFFFFF',
    width: '80%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
    bottom: 36,
    position: 'absolute'
  },
  buttonTitle: {
    fontSize: 24
  }
})