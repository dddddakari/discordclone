// forgot to do just my part not everything created!.

import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';

// Dakari's Part: The Background and Logo!

export default function App() {

    <View style={styles.container}>
      <Image
        style={styles.iconMain}
        source={require('./assets/discordguy.png')}
      />
    </View>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  iconMain: {
    width: 100,
    height: 100,
    marginTop: '40%' ,
