import React, { Component } from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const SampleComponent = () => {
    return(
      <View>
        <View style={{width: 80, height: 80, backgroundColor: 'black'}}/>
        <Home/>
        <Text>Hehehe</Text>
        <Text>Hahaha</Text>
        <Text>Hihihi</Text>
        <Pict />
        <TextInput style={{borderWidth: 1, marginVertical: 15, padding: 5}} placeholder="Ketikkan sesuatu..."/>
        <BoxGreen />
        <Profile />
      </View>
    )
  }
  
  const Home = () => {
    return <Text>Enoge Cakep</Text>;
  }
  
  const Pict = () => {
    return (
      <Image
        source={{ uri: "http://placeimg.com/640/480/tech" }}
        style={{ width: 100, height: 100 }}
      />
    );
  };
  
  class BoxGreen extends Component {
    render() {
      return <Text>Hahahahaa</Text>;
    }
  }
  
  class Profile extends Component {
    render() {
      return (
        <View>
          <Image
            source={{ uri: "http://placeimg.com/640/480/tech" }}
            style={{ width: 100, height: 100, borderRadius: 50, marginVertical: 10 }}
          />
          <Text style={{ fontSize: 20, color: "red" }}>This is bike</Text>
        </View>
      );
    }
  }

  export default SampleComponent