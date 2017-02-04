import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Navigator
} from 'react-native';

// Importing the screens to be rendered !

import SplashScreen from './SplashScreen'
import Main from './Main'
import Login from './Login'



class RouteMapper extends Component{

  renderScene(route,navigator){
    if(route.name == 'splashscreen'){
        return <SplashScreen  navigator={navigator} />
      }

    if(route.name == 'mainscreen'){
        return <Main  navigator={navigator} />
      }

    if(route.name == 'login'){
        return <Login  navigator={navigator} />
      }

  }

  configureScene(route){
    return Navigator.SceneConfigs.FloatFromRight
  }

  render(){
    return(
      <Navigator
      initialRoute={{name: 'splashscreen'}}
      renderScene={this.renderScene.bind(this)}
      configureScene={this.configureScene.bind(this)}
      />
    );
  }


}


export default RouteMapper
