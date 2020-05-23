import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
const SangomaCard = () => {
  const [active, setActive] = useState(false);
  const navigation = useNavigation();
  // const navs = () => {
  //     nav
  // }
  // console.log(navigation.navigate("Details"))
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Content
          style={{
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 20,
            marginRight: 20,
          }}>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      'https://i.pinimg.com/474x/b2/b1/36/b2b1366d853aecfc21d8b04aacefef17--feathers-planning.jpg',
                  }}
                />
                <Body>
                  <Text>Mama Bless</Text>
                  <Text note>
                    {active ? (
                      <Text style={{color: 'green'}}>Active</Text>
                    ) : (
                      <Text note>Last Seen: April 15, 2016</Text>
                    )}
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{
                    uri:
                      'https://www.bliss365.com.ng/wp-content/uploads/2019/01/head-page.png',
                  }}
                  style={{
                    height: 200,
                    width: '100%',
                    flex: 1,
                    resizeMode: 'cover',
                  }}
                />
                <Text
                  style={{
                    paddingTop: 10,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingBottom: 5,
                    textAlign: 'left',
                    color: '#666666',
                    fontSize: 18,
                  }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur sequi, error temporibus totam, dolores ex doloremque
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="star" />
                  <Text>1,926 stars</Text>
                  <Icon name="pulse" style={{color: 'orange'}} />
                  <Text style={{color: 'orange'}}>Trust 50%</Text>
                  <Icon
                    type="FontAwesome"
                    name="check-square-o"
                    style={{color: 'green'}}
                  />
                  <Text style={{color: 'green'}}>Verified</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </TouchableOpacity>
    </>
  );
};
export default SangomaCard;
