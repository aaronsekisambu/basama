import React, {Component} from 'react';
import {Container, Spinner, Button, Icon, Text} from 'native-base';
class SplashScreen extends Component {
  render() {
    return (
      <Container
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Spinner color="#a1a1a1" />
        <Button iconLeft transparent>
          <Icon name="paw" style={{color: '#a1a1a1'}} />
          <Text style={{color: '#8a7575', fontSize: 25, fontWeight: 'bold'}}>
            Sangoma
          </Text>
        </Button>
      </Container>
    );
  }
}

export default SplashScreen;
