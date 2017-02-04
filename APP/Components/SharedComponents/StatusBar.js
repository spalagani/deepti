import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Navigator,
  TouchableOpacity,
  Image
} from 'react-native';

//import Icon from 'react-native-vector-icons/FontAwesome';
// <TouchableOpacity onPress={()=>{alert(this.props.navigator.replace({name:'login'}));}} >
// <Image source={require('../../Screens/img/home-icon.png')} style={{marginTop:15, width:30, height:30}}/>
// </TouchableOpacity>
class StatusBar extends Component{
    render(){
        return(

            <View style={{
                flexDirection : 'row'
            }}>
    <View style={{
                    flex : 6 ,
                    backgroundColor : '#fe9705',
                    height : 20,
                    alignItems : 'center',
                    justifyContent : 'center'

                }}>



                </View>








            </View>

        );
    }

}


export default StatusBar
