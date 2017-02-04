import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Navigator,
  Image,
  Dimensions
} from 'react-native';


const window = Dimensions.get('window');

class SplashScreen extends Component{

  componentDidMount(){
    setTimeout(()=>
    {

      //alert(window.width)
      this.props.navigator.push({name:'mainscreen'})


    },
    3000
  );
  }


  render(){
    return(
      <View>
      <Image
          style={{
            width: window.width,
            height: window.height}}
            source={{uri: 'http://www.deeptipublications.com/ios/splashscreen.jpg'}}
        />
      </View>
    )
  }
}

export default SplashScreen
