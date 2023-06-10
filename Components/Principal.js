import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FAB } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import PantallaDetalles from '../PantallaDetalles';

const Invernaderos = [

];



export default function VentanaPrincipal() {

const route = useRoute();
const { usuario } = route.params || {};
console.log(usuario);

  const navigation = useNavigation();
  const [invernaderos, setInvernaderos] = useState(Invernaderos);

  const agregarInvernadero = (invernadero) => {
    setInvernaderos([...invernaderos, invernadero]);
  };

  const renderInvernadero = ({ item }) => {
    return (
      <View style={styles.invernaderoContainer}>
        <View style={styles.invernaderoInfoContainer}>
          <Text style={styles.invernaderoId}>ID: {item.id}</Text>
          <Text style={styles.invernaderoNombre}>{item.nombre}</Text>
          <Text style={styles.invernaderoDescripcion}>{item.cultivo}</Text>
          <Text style={styles.invernaderoDescripcion2}>{item.variedad}</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton} onPress={() => handleBorrar(item.id)}>
            <Ionicons name="trash-outline" size={24} color="red" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={() => handleVer(item)}>
            <Ionicons name="eye-outline" size={24} color="blue" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const handleBorrar = (invernaderoId) => {
    // Acción de borrar invernadero
    const nuevosInvernaderos = invernaderos.filter((invernadero) => invernadero.id !== invernaderoId);
    setInvernaderos(nuevosInvernaderos);
  };

  const handleVer = (invernadero) => {
    console.log('Invernadero seleccionado:', invernadero);
  navigation.navigate('Detalles', { invernadero });
  };

  const handleAgregarInvernadero = () => {
    navigation.navigate('Registro de invernadero', { agregarInvernadero });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Control Invernadero App</Text>
      <Text style={styles.titulonombre}>¡Hola {usuario}!</Text>
      <View style={styles.imagenContainer}>
        {/* Aquí va la lógica para mostrar la imagen */}
        <Image source={require('./images/imagen5.jpg')} style={styles.imagen} />
        <TouchableOpacity style={styles.fab} onPress={handleAgregarInvernadero}>
          <Ionicons name="add-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
       data={invernaderos} 
       renderItem={renderInvernadero}
       keyExtractor={(item) => item.id.toString()}
       style={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:20,
  },
  imagenContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  imagen: {
    width: 420,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  fab: {
    position: 'absolute',
    bottom: 2,
    right: 4,
    backgroundColor: '#3b5998',
    borderRadius: 28,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  listContainer: {
    width: '100%',
    marginTop: 20,
  },
  invernaderoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  invernaderoNombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  invernaderoDescripcion: {
    fontSize: 16,
    color: 'black',
  },
  iconButton: {
    marginLeft: 12,
  },
  invernaderoInfoContainer: {
    flex: 1, // Ocupa el espacio disponible para los elementos de información del invernadero
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 12,
  },
  invernaderoDescripcion2: {
    fontSize: 14,
    marginTop: 4,
    fontWeight: '400',
  },
  titulonombre: {
    fontSize: 20,
    fontWeight: 'normal',
    marginBottom: 10,
    marginTop:1,
  },
  invernaderoId:{
    fontSize: 16,
    fontWeight: '200',
  },
});