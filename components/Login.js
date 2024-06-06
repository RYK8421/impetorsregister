import React,{useState} from 'react';
import { TouchableOpacity,Text,StyleSheet, View, Image, TextInput,Button } from 'react-native';
import { bkimg } from '../assets';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const navigation = useNavigation();

    const validateEmail = (input) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input)) {
          setEmailError('Please enter a valid email address');
        } else {
          setEmailError('');
        }
        setEmail(input);
      };

      const validatePassword = (input) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,12}$/;
        if (!passwordRegex.test(input)){
            setPasswordError('Password must be 8-12 characters, include an uppercase letter, a lowercase letter, and a symbol');
        } else{
            setPasswordError('');
        }
        setPassword(input);
    };

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };


  const handleDonePress = () => {
    // Handle the "Done" button press
    console.log('Email:', email);
    console.log('Password:', password);
    // Add navigation or form submission logic here
  };


  return (
    <View style={styles.container}>
     <Image
          source={bkimg}
          style={styles.logo}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          value={email}
          onChangeText={validateEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          accessibilityLabel="Email Input"
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        
        <View style={styles.passwordContainer}>
        <TextInput
        style={styles.passwordText}
          placeholder="Password"
          value={password}
          onChangeText={validatePassword}
          secureTextEntry={!passwordVisible} // Toggle visibility or password 
          accessibilityLabel="Password Input"
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleButton}>
          <Text>{passwordVisible ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      <View style={styles.button}>
        <Button title="Done" onPress={handleDonePress} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:20,
    
  },
 
  logo: {
    width: 130,
    height: 100,
    marginTop:10
  },
  textInput: {
    
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginTop: 20,
    borderRadius:20
  
  },
  button: {
    marginTop: 20,
    
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  passwordText: {
    flex: 1,
    height: 40, // Match the height of other text inputs
  },
  toggleButton: {
    padding: 10,
  },
  errorText:{
    color:'red',
    marginTop:2

  },

});
