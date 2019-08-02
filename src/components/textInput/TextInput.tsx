import React from 'react';
import { TextField, TextFieldProps } from 'react-native-material-textfield';

import { theme } from '../../styled';
import { styles } from './styles';

interface Props extends TextFieldProps {
  row: boolean;
}

export const TextInput: React.FC<Props> = ({
  row,
  containerStyle,
  ...props
}) => (
  <TextField
    {...props}
    containerStyle={[row && { flex: 1 }, { width: '90%' }, containerStyle]}
  />
);

TextInput.defaultProps = {
  textColor: theme.text.primary,
  baseColor: theme.color.black,
  tintColor: theme.color.black,
  errorColor: theme.color.black,
  titleTextStyle: styles.opacity,
  labelTextStyle: styles.opacity,
};
