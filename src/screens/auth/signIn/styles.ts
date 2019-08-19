import styled from 'styled-components/native';
import { rs } from '../../../styled';

export const Container = styled.SafeAreaView(() => ({
  flex: 1,
  backgroundColor: 'white',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const Spacing = styled.View((p: any) => ({
  height: rs(p.size || 10),
}));
