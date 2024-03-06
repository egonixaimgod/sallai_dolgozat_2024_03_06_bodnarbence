import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { TextInput, ImageBackground } from 'react-native';
import Blink from './Blink';

const pi = Math.PI
const image = {uri: 'https://ocdn.eu/images/pulscms/YTA7MDA_/89ad9a49fcca70ebc43cfbe35f47c1fc.jpg'};
export default function App() {
  const [radius, setRadius] = useState('');
  const [height, setHeight] = useState('');
  const [surface, setSurface] = useState('');
  function startCalc() {
    let result = calcSurface(radius, height);
    setSurface(result);
  }
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
      
        
        <Text style={styles.textColor}>Kör alapú henger felszínének számítása:</Text>
        <Text style={styles.textColor}>Készítette: Bodnár Bence, 2024.03.06</Text>
      <Text style={styles.textColor}>Sugár</Text>
      <TextInput style={styles.input} onChangeText={radius => setRadius(radius)}/>
 
      <Text style={styles.textColor}>Magasság</Text>
      <TextInput style={styles.input} onChangeText={height => setHeight(height)}/>
 
 <Blink duration={1000}>
      <TouchableHighlight
        style={styles.button}
            onPress={startCalc}
            
          >
            
        <Text style={styles.buttonText}>Számít</Text>
          </TouchableHighlight>
          </Blink>
 
      <Text style={styles.textColor}>Felszín</Text>
      <TextInput style={styles.input} onChangeText={surface => setSurface(surface)} value={surface}/>
 
        <StatusBar style="auto" />
        
      </View>
    </ImageBackground>
    
  );
}

function calcSurface(radius, height) {
  return 2 * pi * (radius * radius) + 2 * pi * radius * height
}
 
const styles = StyleSheet.create({
  buttonText: {fontSize: 80,},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  textColor: {
    color: '#ffd54e',
    fontSize: 36,
    fontWeight: 'bold',
    margin: 5,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#ffd54e',
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    height: 30,
  }
});