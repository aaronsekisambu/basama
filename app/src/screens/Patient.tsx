import React, {Component} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Button,
  Content,
  Thumbnail,
  Text,
  Left,
  Icon,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
const Patient = () => {
  const navigation = useNavigation();
  return (
      <Content>
        <Left style={{marginTop: 80}}>
          <Thumbnail
            source={{
              uri:
                'https://image.freepik.com/free-vector/abstract-colorful-s-letter-logo-gradient-color_10724-37.jpg',
            }}
          />
        </Left>
        <Form
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            width: '80%',
          }}>
          <Item floatingLabel>
            <Label>Mobile</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Gender</Label>
            <Input />
          </Item>
        </Form>
        <Button
          iconRight
          dark
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            width: '50%',
            marginTop: 20,
            fontFamily: 'AppleSDGothicNeo-Medium',
          }}
          onPress={() => navigation.navigate('Home')}>
          <Text>Next</Text>
          <Icon name="arrow-forward" />
        </Button>
      </Content>
  );
};

export default Patient;
