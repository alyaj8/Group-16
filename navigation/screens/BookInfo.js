import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView,Button } from 'react-native';
import Map from './screens/Map';
//import Fetch from './src/Fetch';
//import {userSate,userEffect} from "react";
//import{collection, query,orderBy,onSanpshot,setDoc,doc,getDoc,getDocs} from "firebase/firestore";
//import{db} from "../../config/firebase";
export default function App() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{paddingTop:70, alignItems:"center", }}>
     
      <View style={{backgroundColor:'lightgray', alignItems:"center" ,height:212, width:143 , justifyContent:"center",}}>
      <Text style={{height:20}}>book Poster here</Text>
      </View>
      <View style={{ borderRadius:25 , height:560,}}>
      <View style={{padding:10, justifyContent:"center", alignItems:"center"}}>
  <View style={{padding:10, justifyContent:"center", alignItems:"center", backgroundColor:'#00a46c', borderRadius:15}}>
      <Text style={{flew:1,alignItems:"center",justifyContent:"center", paddingTop:20,paddingLeft:10 ,paddingRight:10}}>Who Moved My Cheese? </Text>
    <Text > by Spencer Johnson</Text>
    <Text > _______________________________________________________</Text>
    <Text style={{ paddingTop:10,paddingLeft:10 ,paddingRight:10}}>Review: </Text>
    <Text style={{paddingLeft:10 ,paddingRight:10}}> _______________________________________________________</Text>
    <Text style={{alignItems:"center",justifyContent:"center",paddingLeft:10 ,paddingRight:10}}> Your review of the book:</Text>
    <Text style={{alignItems:"center",justifyContent:"center",paddingLeft:10 ,paddingRight:10}}> leave your comments and read other’s:</Text>
    <Text style={{alignItems:"center",justifyContent:"center",paddingLeft:10 ,paddingRight:10}}> _______________________________________________________</Text>
        <Text style={{alignItems:"center",justifyContent:"center", paddingTop:20,paddingLeft:10 ,paddingRight:10}}>Description:</Text>
        <Text style={{alignItems:"center",justifyContent:"center",paddingLeft:15 ,paddingRight:15}}>
                An Amazing Way to Deal with Change in Your Work and in Your Life, 
                published on September 8, 1998, is a bestselling seminal work and 
                motivational business fable by Spencer Johnson. The text describes 
                the way one reacts to major change in one's work and life, and four 
                typical reactions to those changes by two mice and two "Littlepeople", 
                during their hunt for "cheese".
        </Text><Text style={{paddingTop:20,paddingLeft:10 ,paddingRight:10}}>ISBN: 9780399144462</Text>
        
        <View style={styles.fixToText}>
            <Button title="Add to:" color="lightgrey" />
       </View>
       <View style={styles.fixToText}> 
            <Button title="Buy now" color="lightgrey" />
       </View>
      </View>
        <StatusBar style="auto" />
      </View>
    </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  fixToText: {
    marginTop: 12,
    width: 280,
    justifyContent: 'center',
    alignContent:"center"
}
});
