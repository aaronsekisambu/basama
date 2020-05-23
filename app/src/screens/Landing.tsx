import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  List,
  ListItem,
} from 'native-base';
import SangomaCard from './SangomaCard';
import FooterTabs from './FooterTabs';
const Landing = () => {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Sangomas</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <SangomaCard />
            <SangomaCard />
            <SangomaCard />
            <SangomaCard />
          </List>
        </Content>
        <FooterTabs />
      </Container>
    );
}

export default Landing;
