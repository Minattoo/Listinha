import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';

const DogScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./dog.jpg')}
        style={styles.image}
      />
      <Text style={styles.text}>Would you pet this dog?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default DogScreen;
