import React, {Component} from 'react';
import {Content, Card, CardItem, Text, Body, Left, Right, Button, Icon, List} from 'native-base';
const dataArray = [
  {title: 'First Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Second Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Third Element', content: 'Lorem ipsum dolor sit amet'},
];
class Services extends Component {
  render() {
    return (
      <Content padder>
        <List>
          <Card>
            <CardItem header bordered>
              <Text style={{color: 'black'}}>Healing</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, incidunt perferendis. Distinctio corrupti labore id
                  totam incidunt neque modi ea aperiam quia, doloremque deleniti
                  quam atque magnam eveniet necessitatibus quasi!
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Left>
                <Button transparent>
                  <Icon type="FontAwesome" name="money" />
                  <Text>15R</Text>
                </Button>
              </Left>
              <Right>
                <Button transparent>
                  <Icon
                    type="FontAwesome"
                    name="check-square-o"
                    style={{color: 'green'}}
                  />
                  <Text style={{color: 'green'}}>Verified</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text style={{color: 'black'}}>Healing</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, incidunt perferendis. Distinctio corrupti labore id
                  totam incidunt neque modi ea aperiam quia, doloremque deleniti
                  quam atque magnam eveniet necessitatibus quasi!
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Left>
                <Button transparent>
                  <Icon type="FontAwesome" name="money" />
                  <Text >15R</Text>
                </Button>
              </Left>
              <Right>
                <Button transparent>
                  <Icon
                    type="FontAwesome"
                    name="check-square-o"
                    style={{color: 'green'}}
                  />
                  <Text style={{color: 'green'}}>Verified</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text style={{color: 'black'}}>Blessing</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, incidunt perferendis. Distinctio corrupti labore id
                  totam incidunt neque modi ea aperiam quia, doloremque deleniti
                  quam atque magnam eveniet necessitatibus quasi!
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Left>
                <Button transparent>
                  <Icon type="FontAwesome" name="money" />
                  <Text>15R</Text>
                </Button>
              </Left>
              <Right>
                <Button transparent>
                  <Icon
                    type="FontAwesome"
                    name="check-square-o"
                    style={{color: 'green'}}
                  />
                  <Text style={{color: 'green'}}>Verified</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </List>
      </Content>
    );
  }
}

export default Services;
