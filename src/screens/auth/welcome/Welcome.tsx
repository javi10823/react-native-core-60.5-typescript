import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { Container, WelcomeImage, Title } from './styles';
import Navigation from '../../../navigation';
import Button from '../../../components/button';
import { fetchExample } from '../../../actions/example';
import State from '../../../reducers';

const IMG_WELCOME = require('../../../assets/images/logo.png');

interface WelcomeProps {
  fetchExample: Function;
  exampleData: any;
}

const Welcome = ({ fetchExample, exampleData }: WelcomeProps) => {
  const mounted: any = useRef();
  useEffect(() => {
    if (!mounted.current /* componentDidMount */) {
      mounted.current = true;
      fetchExample();
    } /* componentDidUpdate */ else {
      console.log(`\n\n`, 'exampleData', exampleData, `\n\n\n`);
    }
  });

  const goToSignIn = () => Navigation.navigate({ routeName: 'SignIn' });

  return (
    <Container>
      <WelcomeImage source={IMG_WELCOME} />
      <Title color="primary" variant="bold" size={14}>
        {`REACT NATIVE TYPESCRIPT\nNEXTDOTS v0.59.9 AUGUST 2019`}
      </Title>
      <Button size="big" text="SignIn Screen" onPress={goToSignIn} />
      {exampleData ? (
        <Title color="primary" size={14}>
          {exampleData.drinks[0].strDrink}
        </Title>
      ) : null}
    </Container>
  );
};

const mapStateToProps = (state: State) => ({
  exampleData: state.example.exampleData,
});

const mapDispatchToProps = (dispatch: Function) => ({
  fetchExample: () => dispatch(fetchExample()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);
