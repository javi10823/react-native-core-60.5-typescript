import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';

import State from '../../../reducers';
import { fetchExample } from '../../../actions/example';
import { Typography, BackButton, EmptyContent } from '../../../components';
import { Container, JSONContainer } from './styles';
import { goBack } from '../../../navigation';

interface Props {
  fetchExample: Function;
  exampleData: any;
}

const FetchExample = ({ fetchExample, exampleData }: Props) => {
  const mounted: any = useRef();
  useEffect(() => {
    if (!mounted.current /* componentDidMount */) {
      mounted.current = true;
      fetchExample();
    } /* componentDidUpdate */ else {
      console.log(`\n\n`, 'exampleData', exampleData, `\n\n\n`);
    }
  });

  return (
    <Container>
      <BackButton onPress={() => goBack()} text="FetchExample" />
      {exampleData ? (
        <JSONContainer>
          <ScrollView>
            <Typography>{JSON.stringify(exampleData, null, 2)}</Typography>
          </ScrollView>
        </JSONContainer>
      ) : (
        <EmptyContent />
      )}
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
)(FetchExample);
