import React,{useState} from 'react';
import {  StyleSheet, View, Image, TextInput,Button , Text,TouchableOpacity} from 'react-native';
import { bkimg } from '../assets';
 

export default function Register() {
  const [email, setEmail] = useState ('');
  const [emailError, setEmailError] = useState('');
  const [password,setPassword] = useState('');
  const [passwordError,setPasswordError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [phoneNumber,setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [message,setMessage] = useState('');


  const [hasLoweCase,setHasLowerCase] = useState(false);
  const [hasUpperCase,setHasUpperCase] = useState(false);
  const [hasNumber,setHasNumber] = useState(false);
  const [hasSymbol,setHasSymbol] = useState(false);
  const [hasLength,setHasMinLength] = useState(false);
  console.log('emailridu', email);


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
       setHasLowerCase(/[a-z]/.test(input));
       setHasUpperCase(/[A-Z]/.test(input));
       setHasNumber(/\d/.test(input)); // for Number
       setHasSymbol(/\W/.test(input)); // for symbol
       setHasMinLength(input.length >= 8 && input.length <= 12);

        setPassword(input);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };
      const validatePhoneNumber = (input) => {
        const phoneNumberRegex = /^[0-9]{10}$/; // Assuming phone number is 10 digits
        if (!phoneNumberRegex.test(input)) {
          setPhoneNumberError('Please enter a valid 10-digit phone number');
        } else {
          setPhoneNumberError('');
        }
        setPhoneNumber(input);
      };

  const handleDone = () => {
    if (
      ! emailError &&
      ! phoneNumberError &&
      hasLoweCase &&
      hasUpperCase &&
      hasNumber &&
      hasSymbol &&
      hasLength
    ){
      setMessage('Registration successful!');
    }
    else{
      setMessage('Please fill out the form correctly');
    }
    
  };

  const handleCancel = () => {
    setMessage('Registration cancelled.');
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
      />
      {emailError ? <Text 
      style={styles.errorText}>
        {emailError}</Text> : null}
        <TextInput
          style={styles.textInput}
          placeholder="Username"
        />
          <TextInput
          style={styles.textadd}
          placeholder="Address"
          multiline={true} 
          numberOfLines={8}
        />
         <TextInput
          style={styles.textInput}
          placeholder="Phone number"
          value={phoneNumber}
          onChangeText={validatePhoneNumber}
          keyboardType='number-pad' // only show number pad
        />
         {phoneNumberError ? <Text style={styles.errorText}>{phoneNumberError}</Text> : null}

        <View style={styles.passwordContainer}>
        <TextInput
        style={styles.passwordInput}
          placeholder="Password"
          value={password}
          onChangeText={validatePassword}
          secureTextEntry={!passwordVisible} // Toggle visibility or password 
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleButton}>
          <Text>{passwordVisible ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>
           
      <View style={styles.passwordcondition}>
      <Text style={hasLoweCase ? styles.valid : styles.invalid}>
          {hasLoweCase ? '✔' : '✘'} At least one lowercase letter
        </Text>
        <Text style={hasUpperCase ? styles.valid : styles.invalid}>
          {hasUpperCase ? '✔' : '✘'} At least one uppercase letter
        </Text>
        <Text style={hasNumber ? styles.valid : styles.invalid}>
          {hasNumber ? '✔' : '✘'} At least one number
        </Text>
        <Text style={hasSymbol ? styles.valid: styles.invalid}>
          {hasSymbol ? '✔' : '✘'} At least one symbol
        </Text>
        <Text style={hasLength ? styles.valid : styles.invalid}>
          {hasLength ? '✔' : '✘'} Length between 8 and 12 characters
        </Text>
        </View>


      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
        
      <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Done"onPress={handleDone} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={handleCancel} />
          </View>
        </View>
        {/* {message ? <Text style={styles.message}>{message}</Text> : null} */}
        {message ? <Text style={[styles.message, message.includes('successful') ? {color: 'green'} : {color: 'red'}]}>{message}</Text> : null}
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
    
    height: 35,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginTop: 20,
    borderRadius:10
  
  },
  textadd: {
    
    height: 80,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 8,
    marginTop: 10,
    borderRadius: 10,
    textAlignVertical: 'top'
  
  },
  buttonContainer: {

    flexDirection: 'row-reverse',
    marginTop: 20,
    width: '80%'
  },
  button: {

    flex: 1,
    marginHorizontal: 15,
  },
  errorText:{
    color:'red',
    marginTop:2

  },
  passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: 20,
  },
  passwordInput: {
    flex: 1,
    height: 40,  // Match the height of other text inputs
    paddingLeft:10
  },
  passwordcondition: {
    width: '80%',
    marginTop: 10,
  },
  valid: {
    color: 'green',
  },
  invalid: {
    color: 'red',
  },

  toggleButton: {
    position:'absolute',
    right: 12
     },
     message: {
      marginTop: 20,
      fontSize: 16,
      color:'red'
    },


});
