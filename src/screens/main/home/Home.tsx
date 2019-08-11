import React from 'react';
import { connect } from 'react-redux';

import { Container, Title } from './styles';

const Home = () => {
  return (
    <Container>
      <Title color="primary" variant="bold" size={14}>
        {`HOME`}
      </Title>
    </Container>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
