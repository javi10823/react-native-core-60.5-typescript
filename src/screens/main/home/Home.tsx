import React from 'react';
import { connect } from 'react-redux';

import { Container, Title } from './styles';
import { Button, Spacing } from '../../../components';
import { goToPage } from '../../../navigation';

const Home = () => {
  return (
    <Container>
      <Title color="primary" variant="bold" size={14}>
        {`HOME`}
      </Title>
      <Button size="big" text="Go to SignIn" onPress={() => goToPage('SignIn')} />
      <Spacing />
      <Button size="big" text="Go to FetchExample" onPress={() => goToPage('FetchExample')} />
    </Container>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
