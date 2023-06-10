import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions, Platform,TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const Stack = createStackNavigator();
let a=0;
let b=0;


export default function PantallaRegistro({ navigation }) {

  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');


  const validarCorreo = () => {
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
      setError('Ingresa un correo electrónico válido');
      a=1;
    } else {
      setError('');
      a=0;
    }
  };

  const validarContrasena = () => {
    if (contrasena.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres');
      b=1;
    } else {
      setError('');
      b=0;
    }
  };

  const handleSubmit = () => {
    if (!nombre || !apellidoPaterno || !apellidoMaterno || !telefono || !correo || !contrasena||a!==0||b!==0) {
      setError('Por favor completa todos los campos o verifica el correo y contraseña');
      console.log(a);
    } else {
      // Crear el objeto de usuario con los datos ingresados
      console.log(a);
      const usuario = {
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        telefono,
        correo,
        contrasena
      };
  
      // Realizar acción de registro o envío de datos
  
      // Restablecer los campos del formulario
      setNombre('');
      setApellidoPaterno('');
      setApellidoMaterno('');
      setTelefono('');
      setCorreo('');
      setContrasena('');
  
      // Navegar a la pantalla de Inicio y pasar el usuario como parámetro
      console.log(usuario);
      navigation.navigate('Inicio', { usuario });
  
    }
  };


  const renderButton = () => {
    if (Platform.OS === 'web') {
      // Renderizar el botón de react-native-web para entorno web
      const { Button } = require('react-native-web');
      return (
        <Button
          title="¿Aun no tienes cuenta? Registrate."
          onPress={() => navigation.navigate('Inicio')}
        />
      );
    } else {
      // Renderizar el componente TouchableNativeFeedback para entorno nativo
      const { TouchableNativeFeedback } = require('react-native-gesture-handler');
      return (
        <TouchableNativeFeedback onPress={() => navigation.navigate('Inicio')}>
          <Text style={styles.buttonText}>¿Aun no tienes cuenta? Registrate.</Text>
        </TouchableNativeFeedback>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Control Invernadero App</Text>
      <Text style={styles.subtitulo1}>¡Hola!</Text>
      <Text style={styles.subtitulo2}>Ingresa tus datos</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Apellido Paterno"
        value={apellidoPaterno}
        onChangeText={setApellidoPaterno}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Apellido Materno"
        value={apellidoMaterno}
        onChangeText={setApellidoMaterno}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Teléfono"
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="phone-pad"
        />
        <TextInput
             style={styles.textInput}
             placeholder="Correo electrónico"
             value={correo}
             onChangeText={setCorreo}
             onBlur={validarCorreo}
           />
        <TextInput
             style={styles.textInput}
             placeholder="Contraseña"
             value={contrasena}
             onChangeText={setContrasena}
             secureTextEntry={true}
             onBlur={validarContrasena}
           />
           <TouchableOpacity style={styles.button} onPress={handleSubmit}>
  <LinearGradient
   colors={['#4c669f', '#3b5998', '#192f6a']}
    style={styles.gradient}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  />
  <Text style={styles.buttonText}>Registrarse</Text>
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
    });