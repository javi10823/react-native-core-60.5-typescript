import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from './styles';
import { theme } from '../../styled/theme';

interface Props {
  text: string;
  loading: boolean;
  spinnerColor: string;
}

const BackButton = ({ text, loading, spinnerColor }: Props) => {
  return (
    <Container>
      <ActivityIndicator color={spinnerColor} />
    </Container>
  );
};

BackButton.defaultProps = {
  text: 'Empty content',
  loading: true,
  spinnerColor: theme.color.primary,
};

export default BackButton;
