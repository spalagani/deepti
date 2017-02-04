import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Image,
  Navigator,
  TouchableOpacity,
  WebView,
  StyleSheet
} from 'react-native';


const WEBVIEW_REF = "webview";

class Main extends Component {
  constructor() {
    super(...arguments);
    this.state = {
    	url: 'http://www.deeptipublications.com',
      backButtonEnabled: false
    };
  }

  render() {
    return (

      <View style={styles.container}>
      	<View style={styles.topbar}>
        <View style={styles.backContainer}>
          {this.renderBackBtn()}
        </View>
      		<View style={styles.urlContainer}>
      		  <Text numberOfLines={2} style={styles.topbarText}></Text>
      		</View>

      	</View>

        <Image source={{uri: 'http://www.deeptipublications.com/ios/splashscreen.jpg'}} style={{flex : 1, width:null, height:null}}>

          <WebView
          source={{uri: 'http://www.deeptipublications.com'}}
          style={{marginTop: 0,flex : 1}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          ref={WEBVIEW_REF}
      		style={{flex: 1}}
      		onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          startInLoadingState={true}
          />
        </Image>



      </View>
    );
  }
renderBackBtn(){
  if(this.state.backButtonEnabled){
    return (
      <View style={{flex: 1, flexDirection: 'row'}} >

          <View style={{width: 20}} >
          <TouchableOpacity
            disabled={!this.state.backButtonEnabled}
            onPress={this.onBack.bind(this)}
            >
          <Image
          style={{width: 20, height: 20, padding: 10}}
          source={{uri: 'https://cdn4.iconfinder.com/data/icons/developer-set-3/128/left-20.png'}}
        />
</TouchableOpacity>
        </View>
        <View style={{width: 40}}>
        <TouchableOpacity
          disabled={!this.state.backButtonEnabled}
          onPress={this.onBack.bind(this)}
          >
          <Text>Back</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }else{
    return;
  }

}

  onBack() {
    //alert("Back Button");
    this.refs[WEBVIEW_REF].goBack();

  }

  onNavigationStateChange(navState) {
    //alert("Nav State  Button");
    //alert(this.state.backButtonEnabled);
    this.setState({
      backButtonEnabled: navState.canGoBack,
      url: navState.url
    });
  }
};


var styles = StyleSheet.create({
  urlContainer: {
    flex: 0.8,
    paddingRight: 0,
    paddingLeft: 0,
    alignItems: 'flex-end',
    paddingRight: 15
  },
  backContainer: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  topbarText: {
    color: 'black',
    flexDirection: 'column'

  },
  topbar: {
    //height: 55,
    padding:10,
    backgroundColor: '#fe9905',
    alignSelf: 'stretch',
    flexDirection: 'row'
  },
  container: {
    paddingTop: 15,
    backgroundColor: '#fe9905',
    flex: 1,
    flexDirection: 'column'
  }
});
export default Main
