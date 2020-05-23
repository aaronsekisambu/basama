import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Badge,
} from 'native-base';
class FooterTabs extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button badge vertical>
            <Badge>
              <Text>2</Text>
            </Badge>
            <Icon name="chatbubbles" />
            <Text>Message</Text>
          </Button>
          <Button vertical>
            <Icon type="FontAwesome" name="money" />
            <Text>Donate</Text>
          </Button>
          <Button active badge vertical>
            <Badge>
              <Text>51</Text>
            </Badge>
            <Icon active name="navigate" />
            <Text>Navigate</Text>
          </Button>
          <Button vertical>
            <Icon type="FontAwesome" name="info" />
            <Text>Info</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
export default FooterTabs;
