import React from 'react';
import { connect } from 'react-redux';
import { Transition } from 'react-navigation-fluid-transitions';

import { Container, Title } from './styles';
import { Button, Spacing } from '../../../components';
import { goToPage } from '../../../navigation';

class TransitionExample extends React.Component {
  render() {
    return (
      <Container>
        <Title>Transition Example</Title>
        <Transition shared="example">
          <Button size="big" text="Transition" onPress={() => goToPage('Home')} />
        </Transition>
      </Container>
    );
  }
}

export default TransitionExample;
