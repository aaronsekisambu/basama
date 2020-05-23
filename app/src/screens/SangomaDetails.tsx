import React, {Component} from 'react';
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
  Right,
  Tab,
  Tabs,
  TabHeading,
} from 'native-base';
import Services from './Services';
import Contacts from './Contacts';
 class SagomaDetails extends Component {
   render() {
     return (
       <Container>
         <Content>
           <Card>
             <CardItem></CardItem>
             <CardItem cardBody>
               <Image
                 source={{
                   uri:
                     'https://www.bliss365.com.ng/wp-content/uploads/2019/01/head-page.png',
                 }}
                 style={{height: 200, width: '100%', flex: 1}}
               />
             </CardItem>
             <CardItem>
               <Left>
                 <Button transparent>
                   <Icon active name="thumbs-up" />
                   <Text>12 Likes</Text>
                 </Button>
               </Left>
               <Body>
                 <Button transparent>
                   <Icon active name="chatbubbles" />
                   <Text>4 Comments</Text>
                 </Button>
               </Body>
               <Right>
                 <Text>11h ago</Text>
               </Right>
             </CardItem>
           </Card>
           <Tabs>
             <Tab
               heading={
                 <TabHeading>
                   <Icon name="medkit" />
                   <Text>Services</Text>
                 </TabHeading>
               }>
               <Services />
             </Tab>
             <Tab
               heading={
                 <TabHeading>
                   <Icon name="contact" />
                   <Text>Contact</Text>
                 </TabHeading>
               }>
               <Contacts />
             </Tab>
           </Tabs>
         </Content>
       </Container>
     );
   }
 }

export default SagomaDetails;
