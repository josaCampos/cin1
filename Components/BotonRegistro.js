import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-web';

export default function ButtonRegistro({ label }) {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Registro'); 
  };

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#000',
    fontSize: 16,
  },
});