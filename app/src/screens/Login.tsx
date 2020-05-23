import React, {Component} from 'react';
import {Container, Button, Icon, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
const Login = () => {
  const navigation = useNavigation();
  return (
    <Container
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
      }}>
      <Text style={{color: '#424242', fontSize: 18, fontWeight: '200'}}>
        Welcome to the
      </Text>
      <Text
        style={{
          color: 'black',
          fontSize: 30,
          fontWeight: '500',
          fontFamily: 'AppleSDGothicNeo-Medium',
        }}>
        Sangoma's App
      </Text>
      <Button
        iconLeft
        dark
        style={{
          marginTop: 20,
          width: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }} onPress={() => navigation.navigate("Account")}>
        <Icon name="contact" />
        <Text style={{color: 'white', fontSize: 18}}>Login</Text>
      </Button>
    </Container>
  );
};

export default Login;
