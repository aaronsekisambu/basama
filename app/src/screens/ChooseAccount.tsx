import React, {Component} from 'react';
import {Container, Button, Icon, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
const ChooseAccount = () => {
  const navigation = useNavigation();
  return (
    <Container
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
      }}>
      <Text
        style={{
          color: '#424242',
          fontSize: 22,
          fontWeight: '400',
          fontFamily: 'AppleSDGothicNeo-Medium',
          width: '50%',
        }}>
        Choose an account
      </Text>

      <Text
        style={{
          marginTop: 10,
          color: '#424242',
          fontSize: 12,
          fontWeight: '300',
          fontFamily: 'AppleSDGothicNeo-Medium',
          width: '50%',
        }}>
        You can only choose this account once. Select the right choice.
      </Text>
      <Button
        iconRight
        bordered
        dark
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          width: '50%',
          marginTop: 20,
          fontFamily: 'AppleSDGothicNeo-Medium',
        }}
        onPress={() => navigation.navigate('Patient')}>
        <Icon name="medkit" />
        <Text>Patient</Text>
      </Button>
      <Button
        iconRight
        bordered
        dark
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          width: '50%',
          marginTop: 20,
          fontFamily: 'AppleSDGothicNeo-Medium',
        }}
        onPress={() => navigation.navigate('Doctor')}>
        <Icon name="pulse" />
        <Text>Doctor</Text>
      </Button>
    </Container>
  );
};

export default ChooseAccount;
