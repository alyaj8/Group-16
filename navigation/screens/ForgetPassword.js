import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {getAuth,sendPasswordResetEmail} from "firebase/auth";

export default function ForgetPassword() {
  const [Email, setEmail] = useState('');////////varible wrong

  return (
      <View style={styles.container}>

        <Text style={styles.title}>Forget password </Text>

        <View style={styles.container}>
          <TextInput
              style={styles.body}

              fontSize='15'
              placeholder="Enter your email"
              value={Email}
              onChangeText={text => setEmail(text)}
              underlineColorAndroid="transparent"
          />
        </View>


        <View style={styles.buttonCont}>
          <Button onPress={() => {
            if (!Email) {
              alert('Please enter email')
              return;
            }
            const auth = getAuth();
            sendPasswordResetEmail(auth, Email)
                .then(() => {
                  alert('Email sent, please check your email')
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  alert(errorMessage)
                 console.log(errorMessage)
                });

          }} title=' Reset Password ' fontSize='35' fontWeight='bold'
                  color="#ffff"
          >

          </Button>
        </View>

      </View>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'whiteghost',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {

    fontWeight: 'bold',
    fontSize: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  leftTitle: {
    alignSelf: 'stretch',
    textAlign: 'left',
    marginLeft: 20,
  },

  body: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    margin: 12,
    width: 250,
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,


  },
  buttonCont: {

    margin: 50,
    padding: 5,
    width: 250,
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: "#C6E7DD",
    borderColor: '#C6E7DD',

  },

});
