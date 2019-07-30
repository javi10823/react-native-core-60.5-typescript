import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Container, WelcomeImage, Title } from "./styles";
import { TypographyVariant } from "../../components/typography";
import Navigation from "../../navigation";
import Button from "../../components/button";
import { thunkActionApiExample } from "../../actions/exampleApi/actionExampleApi";

const IMG_WELCOME = require("../../assets/images/logo.png");

interface WelcomeProps {
  thunkActionApiExample: any;
}

const Welcome = (props: WelcomeProps) => {
  // Similar to componentDidMount and componentDidUpdate:

  useEffect(() => {}, [
    props.thunkActionApiExample({
      id: 1
    })
  ]);

  const goToComponents = () => {
    Navigation.navigate({ routeName: "Welcome" });
  };

  return (
    <Container>
      <WelcomeImage source={IMG_WELCOME} />
      <Title
        color="primary"
        variant={TypographyVariant.Bold}
        size={14}
        numberOfLines={2}
      >
        REACT NATIVE TYPESCRIPT NEXTDOTS v0.59.9 AUGUST 2019
      </Title>
      <Button size="big" text="Common components" onPress={goToComponents} />
    </Container>
  );
};

Welcome.navigationOptions = {
  header: null
};

const mapDispatchToProps = {
  thunkActionApiExample
};

export default connect(
  null,
  mapDispatchToProps
)(Welcome);
