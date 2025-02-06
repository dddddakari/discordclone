import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";

const LandingPage = () => {
    const handleButtonClick = () => {
        alert('Alert Button pressed!! This does nothing... Sorry :(');
    };

    return (
        <View style={styles.container}>
            <Image style={styles.iconMain}
                source={require('../assets/discordguy.png')}
                resizeMode="contain"
            />
          
            <Text style={styles.text}>Welcome To Discord</Text>
            <Text style={styles.subText}>Hang Out, play games, or just talk.</Text>
            <Text style={styles.subText}>Tap Below to get started!</Text>
          
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
                    <Text style={[styles.buttonText, styles.secondaryButtonText]}>Register</Text>
                </TouchableOpacity>
                {/* Actual Alert Button */}
                <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
                    <Text style={styles.buttonText}>Alert</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        height: '100%',
    },
    iconMain: {
        marginTop: '30%',
        height: 150,
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
        width: '100%',
        alignItems: 'stretch', 
        paddingHorizontal: '1%',
        paddingBottom: 24,
        marginTop: '50%'      
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: '40%',
        width: '100%', 
        borderRadius: 25,
        marginTop: 16,
    },
    buttonText: {
        color: '#5865F2',
        fontSize: 13,
        fontWeight: 'bold',
    },
    secondaryButton: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#fff',
        paddingHorizontal: '37%',
        width: '100%',
    },
    secondaryButtonText: {
        color: '#fff',
    },
});

export default LandingPage;