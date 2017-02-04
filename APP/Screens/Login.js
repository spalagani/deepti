import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Navigator,
  TouchableOpacity
} from 'react-native';


class Login extends Component{

    render(){

        return(
            <View style={{
                marginTop : 40,
                justifyContent : 'center',
                alignItems : 'center',
                flex : 1
            }}>
            <TouchableOpacity
            onPress = {()=>{
                alert("test !!!")
            }}
            >
            <Text>
            Login Screen
            </Text>
            </TouchableOpacity>
            </View>
        );
    }


}


export default Login