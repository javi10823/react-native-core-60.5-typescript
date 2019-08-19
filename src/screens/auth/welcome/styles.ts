import styled from 'styled-components/native';

import Typography from '../../../components/typography';
import { theme, rs } from '../../../styled';

export const Container = styled.SafeAreaView(() => ({
  flex: 1,
  backgroundColor: theme.color.white,
  justifyContent: 'center',
  alignItems: 'center',
}));

export const WelcomeImage = styled.Image(() => ({
  width: rs(80),
  height: rs(80),
}));

export const Title = styled(Typography)<any>(() => ({
  margin: rs(20),
  textAlign: 'center',
}));
