import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Separator,
  Button, Icon, Right
} from 'native-base';
 class Contacts extends Component {
  render() {
    return (
      <Content>
        <Separator bordered>
          <Text>Mobile</Text>
        </Separator>
        <ListItem last>
          <Text>+27 3451 2242</Text>
        </ListItem>
        <Separator bordered>
          <Text>What's app</Text>
        </Separator>
        <ListItem last>
          <Text>+27 3451 2242</Text>
        </ListItem>
        <Separator bordered>
          <Text>Email</Text>
        </Separator>
        <ListItem last>
          <Text>mama@gmail.com</Text>
        </ListItem>
        <Separator bordered>
          <Text>Website</Text>
        </Separator>
        <ListItem last>
          <Text>www.mamagun.com</Text>
        </ListItem>
        <Right style={{marginTop: 12}}>
          <Button iconLeft dark primary>
            <Icon name="chatbubbles" />
            <Text>Chat</Text>
          </Button>
        </Right>
      </Content>
    );
  }
}

export default Contacts