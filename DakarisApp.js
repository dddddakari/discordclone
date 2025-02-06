import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';

// Dakari's Part: The Background and Logo!


export default function App() {

  // this is the actual Alert button that is NEEDED per the requirements
  const handleButtonClick = () => {
    alert('Alert Button pressed!! This does nothing... Sorry :(')
  };
  const handleSignup = () => {
    Alert.alert('Sign in Error', 'oops! this had no function yet, Register later! :)')
    
  };
  const handleLogIn = () => {
    Alert.alert('Log In Error', 'oops! this had no function yet, Log In later! :)')
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.iconMain}
        source={require('./assets/discordguy.png')}
      />
      <Text style={styles.text}>Welcome To Discord</Text>
      <Text style={styles.subText}>Hang Out, play games, or just talk.</Text>
      <Text style={styles.subText}>Tap Below to get started!</Text>

     
      

    	<View style={styles.buttonContainer}>
        

        <TouchableOpacity style={styles.registerButton} onPress={handleSignup}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logButton} onPress={handleLogIn}>
          <Text style={styles.logText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
          <Text style={styles.buttonText}>Alert</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  }, 
  subText: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
  buttonContainer: {
  width: '90%',
  alignItems: 'center',
  paddingHorizontal:  12,
  paddingBottom: 24,
  marginTop: '50%'
  
  },
  button: {
    backgroundColor: '#7289DA', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 4,
    width: '35%',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 16,
    position: 'fixed',
    bottom: 1, 
    left: -100,
  },
  buttonText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: 'white', 
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: '100%',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 16,
    marginTop: '%',
  },
  registerText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  logButton: {
    backgroundColor: '#2a04c4', 
    paddingVertical: 12,
    paddingHorizontal: 24,
    width: '100%',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 16,
  },
  logText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
