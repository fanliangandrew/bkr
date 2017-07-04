/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  Alert,
  View
} from 'react-native';

import Camera from 'react-native-camera';

import ToastAndroid from './js_package/ToastAndroid';
import HelloWorld from './js_package/HelloWorld';


class RstImg extends Component {

  render() {
    if (this.props.url === null || this.props.url === '') {
      return (<View><Text style={styles.instructions}>Waiting ...</Text></View>)
    } else {
      return (<View><Image source={{ uri: this.props.url }} style={{ width: 193, height: 110, alignSelf: 'center' }} /></View>)
    }
  }

}

async function hello() {
  try {
    var helloWorldStr = await HelloWorld.say();
    console.log(helloWorldStr);
  } catch (e) {
    console.error(e);
  }
}

export default class bankCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frequence: 10000,
      tmpUrl: ''
    }
    // setTimeout(() => {
    //   var that = this;
    //   const options = {};
    //   //options.location = ...
    //   options.target = Camera.constants.CaptureTarget.temp
    //   this.camera.capture({ metadata: options })
    //     .then((data) => console.log(data))
    //     .catch(err => console.error(err));
    // }, 3000)

    // setInterval(() => {
    //   const options = {};
    //   //options.location = ...
    //   this.camera.capture({ metadata: options })
    //     .then((data) => console.log(data))
    //     .catch(err => console.error(err));
    // }, this.state.frequence);
  }



  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <View style={styles.rectangleContainer}>
            <View style={styles.rectangle} />
          </View>
        </Camera>
        <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        <Text style={styles.capture} onPress={this.hiWorld.bind(this)}>[helllo]</Text>
        <RstImg url={this.state.tmpUrl} />
        <Text style={styles.welcome}>
          Welcome to BankCard Project!
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }


  takePicture() {
    // Takpicture in true And roid Equipment
    //  ......
    // var that = this;
    // const options = {};
    // //options.location = ...
    // options.target = Camera.constants.CaptureTarget.temp
    // this.camera.capture({ metadata: options })
    //   .then((data) => {
    //     console.log(data);
    //     that.setState({ tmpUrl: data.path });
    //   })
    //   .catch(err => console.error(err));

    // Test for Android Toast:
    // helloWorld();
    ToastAndroid.show('Awesome', 12);
  }

  hiWorld() {
    console.log("Hi ,world!")
    hello();
  }



}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  preview: {
    flex: 1,
    justifyContent: 'center'
  },
  capture: {
    flex: 0,
    textAlign: 'center',
    borderRadius: 5,
    padding: 10,
    margin: 40
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  rectangle: {
    height: 150,
    width: 300,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent'
  }
});

AppRegistry.registerComponent('bankCard', () => bankCard);
