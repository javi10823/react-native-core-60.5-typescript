import { TextProperties } from 'react-native';

import { TypographyVariant } from './Typography';
import { normalize } from '../../utils/dimensions';
import styled from 'styled-components/native';
import { theme } from '../../styled';

type StyledTextProps = {
  color: keyof typeof theme.text;
  textAlign: 'left' | 'right' | 'center';
  size: number;
  variant: keyof typeof TypographyVariant;
} & TextProperties;

export const StyledText = styled.Text<StyledTextProps>`
  color: ${p => theme.text[p.color]};
  text-align: ${p => p.textAlign};
  /* TODO: install fonts */
  /* font-family: ${p => p.variant}; */
  font-size: ${p => normalize(p.size)};
`;
