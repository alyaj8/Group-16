import * as React from 'react';
import { StyleSheet, Text, Image, SafeAreaView, View } from 'react-native';
import Userlogin from './navigation/screens/Userlogin'
import UserSignUp from './navigation/screens/UserSignUp'
import WelcomePage from './navigation/WelcomePage'
import { NavigationContainer, navigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCb8vT5-UmFZV-954feGAE2L0-T4Tgpqhs",
  authDomain: "group16-de98b.firebaseapp.com",
  projectId: "group16-de98b",
  storageBucket: "group16-de98b.appspot.com",
  messagingSenderId: "19414542563",
  appId: "1:19414542563:web:460d20dd6abdeabef47dd6",
  measurementId: "G-F5B7J7EDXR"
};

const Stack = createNativeStackNavigator();
initializeApp(firebaseConfig)


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomePage"
          component={WelcomePage}
        />
        <Stack.Screen
          name="Userlogin"
          component={Userlogin}
        />
        <Stack.Screen name="UserSignUp" component={UserSignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})*/
export default App;

