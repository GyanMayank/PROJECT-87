import React,{Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getAuth, signOut} from 'firebase/auth'

export default class Logout extends Component{
     componentDidMount(){
          const auth=getAuth()

          signOut(auth).then(()=>{
               this.props.navigation.replace('Login')
          })
          .catch((error)=>{
               alert(error.message)
          })
     }

     render(){
          return(
               <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text>Logout</Text>
               </View>
          )
     }
}