import React from 'react';
import { StyleSheet, Text, View, Pressable, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native-web';

export default function Boton({ label }) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Principal');
  };

  const renderButtonText = () => {
    if (Platform.OS === 'web') {
      return null; // No mostrar texto adicional en la versión web
    } else {
      return <Text style={styles.text}>{label}</Text>; // Mostrar texto en la versión iOS/Android
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handlePress}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
        {renderButtonText()}
        {Platform.OS === 'web' && (
          <View style={styles.buttonOverlay}>
            <Button title={label} onPress={handlePress} color="transparent" />
          </View>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    marginTop: 40,
    width: '80%',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    zIndex: 1,
  },
  buttonOverlay: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});