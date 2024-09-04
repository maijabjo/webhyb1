import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [age, setAge] = useState(" ")
  const [lower, setLower] = useState("0")
  const [upper, setUpper] = useState("0")
  const calculate = () => {
  const resultLower = age * 0.65
  setLower(resultLower)
  const resultUpper = age * 0.85
  setUpper(resultUpper)
  }
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>HEART RATE LIMITS</Text>
      <Text></Text>
      <Text>AGE:</Text>
      <TextInput
      placeholder="Write yor age here: "
      value ={age}
      onChangeText={text => setAge(text)}
      keyboardType = 'decimal-pad'
      />
      <Text></Text>
      <Button title ="CALCULATE" onPress = {calculate}></Button>
      <Text></Text>
      <Text style = {styles.field}>Lower heart rate limit:</Text>
      <Text style = {styles.field}>{lower.toFixed(2)}</Text>
      <Text></Text>
      <Text style = {styles.field}>Upper heart rate limit:</Text>
      <Text style = {styles.field}>{upper.toFixed(2)}</Text>
      <Text></Text>
      <Text style = {styles.field}>Limits: {lower.toFixed(2)} - {upper.toFixed(2)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff000',
    alignItems: 'center',
    paddingTop: 20,
    margin: 8,
  },
});
