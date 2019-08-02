import React from 'react';

import { StyledText } from './styles';
import { theme } from '../../styled';

export const TypographyVariant = {
  regular: 'nunito-regular',
  bold: 'nunito-bold',
  extraBold: 'nunito-extraBold',
  light: 'nunito-light',
};

export interface TypographyProps {
  color: keyof typeof theme.text;
  variant: keyof typeof TypographyVariant;
  children: React.ReactNode;
  textAlign: 'left' | 'right' | 'center';
  size: number;
}

const Typography = ({ children, ...props }: TypographyProps) =>
  !children ? null : <StyledText {...props}>{children}</StyledText>;

Typography.defaultProps = {
  variant: 'regular',
  color: 'primary',
  textAlign: 'left',
  children: null,
  size: 12,
};

export default Typography;
