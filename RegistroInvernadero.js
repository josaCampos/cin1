import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions, Platform, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const Stack = createStackNavigator();

export default function PantallaRegistro({ navigation, route }) {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [cultivo, setCultivo] = useState('');
  const [variedad, setVariedad] = useState('');
  const [error, setError] = useState('');

  const { agregarInvernadero } = route.params;


   const handleSubmit = () => {
    if (!id || !nombre || !cultivo || !variedad) {
      setError('Por favor completa todos los campos');
    } else {
      setError('');

      const invernadero = {
        id: id,
        nombre: nombre,
        cultivo: cultivo,
        variedad: variedad
      };

      agregarInvernadero(invernadero);

      // Limpiar los campos de entrada
      setId('');
      setNombre('');
      setCultivo('');
      setVariedad('');

      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./imagen3.jpg')} style={styles.imagen} />
      <Text style={styles.titulo}>Control Invernadero App</Text>
      <Text style={styles.subtitulo2}>Registra un invernadero</Text>

      <TextInput
        style={styles.textInput}
        placeholder="id"
        value={id}
        onChangeText={setId}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Cultivo"
        value={cultivo}
        onChangeText={setCultivo}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Variedad"
        value={variedad}
        onChangeText={setVariedad}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    },
    titulo: {
    fontSize: 40,
    textAlign: 'center',
    color: '#000',
    marginBottom: 25,
    fontWeight: 'bold',
    },
    subtitulo1: {
    fontSize: 25,
    color: '#34434D',
    marginBottom: 1,
    fontWeight: 'bold',
    },
    subtitulo2: {
    fontSize: 20,
    marginBottom: 20,
    color: 'gray',
    },
    textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 20,
    fontSize: 16,
    width: '80%',
    height: 60,
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: '#fff',
    },
    gradient: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      borderRadius: 20,
    },
    button: {
      width: '40%',
      height: 50,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      marginTop: 20
    },
    buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    },
    errorText: {
    color: 'red',
    marginTop: 10,
    },
    imagen: {
        width: 420,
        height: 220,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 20,
      },
    });