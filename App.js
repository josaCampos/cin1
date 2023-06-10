import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions, Platform, Image,TouchableOpacity } from 'react-native';

import Svg, { Path, Defs, Stop } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { width, height } = Dimensions.get('window');
import Boton from './Components/Boton';
import BotonRegistro from './Components/BotonRegistro';
import PantallaRegistro from './PantallaRegistro';
import Principal from './Components/Principal';
import PantallaDetalles from './PantallaDetalles';
import RegistroInvernadero from './RegistroInvernadero';
import { useState } from 'react';

import { LinearGradient } from 'expo-linear-gradient';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Registro" component={PantallaRegistro} />
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Detalles" component={PantallaDetalles} />
        <Stack.Screen name="Registro de invernadero" component={RegistroInvernadero} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation, route }) {

  const { usuario } = route.params || {};
  console.log(usuario);

  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (correo === usuario.correo && contrasena === usuario.contrasena) {
      navigation.navigate('Principal',{usuario: usuario.nombre});
      setError('');
    } else {
      setError('Los datos ingresados no son válidos');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./imagen4.jpg')} style={styles.imagen} />

      <Text style={styles.titulo}>Control Invernadero App</Text>
      <Text style={styles.subtitulo1}>¡Bienvenido!</Text>
      <Text style={styles.subtitulo2}>Agrega tus credenciales</Text>
      <TextInput
        style={styles.textInput}
        placeholder='josa@gmail.com'
        value={correo}
        onChangeText={setCorreo}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Contraseña'
        secureTextEntry={true}
        value={contrasena}
        onChangeText={setContrasena}
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
  <LinearGradient
    colors={['#4c669f', '#3b5998', '#192f6a']}
    style={styles.gradient}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  />
  <Text style={styles.buttonText3}>Iniciar sesión</Text>
</TouchableOpacity>
      <BotonRegistro
        label="¿Aun no tienes cuenta? Registrate."
        onPress={() => navigation.navigate('Registro')}
      />
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
    fontSize: 30,
    color: '#34434D',
    marginBottom: 1,
    fontWeight: 'bold',
  },
  subtitulo2: {
    fontSize: 20,
    marginBottom: 5,
    color: 'gray',
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    fontSize: 18,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  imagen: {
    width: 420,
    height: 280,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 20,
  },
  errorText: {
  color: 'red',
  marginTop: 10,
  },
  buttonText2: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    },
    button: {
      width: '40%',
      height: 50,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      borderWidth: 2,
      borderColor: '#fff', // Color del contorno del botón
    },
    buttonText3: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
    },
});