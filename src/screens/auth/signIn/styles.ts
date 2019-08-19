import styled from 'styled-components/native';
import { rs, theme } from '../../../styled';
import { Container as _Container } from '../../../components';

export const Container = styled(_Container)(() => ({
  backgroundColor: theme.color.white,
  justifyContent: 'center',
  alignItems: 'center',
}));

export const Spacing = styled.View((p: any) => ({
  height: rs(p.size || 10),
}));
