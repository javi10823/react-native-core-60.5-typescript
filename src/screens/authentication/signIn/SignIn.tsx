import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, InjectedFormProps } from 'redux-form';
import { Alert } from 'react-native';
import * as yup from 'yup';

import { Store } from '../../../store';
import * as Form from '../../../modules/form';
import { Typography, Button } from '../../../components';

import { Container, Spacing } from './styled';

interface Values {
  username: string;
  password: string;
}

type StoreProps = ReturnType<typeof mapStateToProps>;

type ConnectProps = StoreProps;

type FormProps = InjectedFormProps<Values, ConnectProps>;

type Props = ConnectProps & FormProps;

interface State {
  loading: boolean;
  error: boolean;
}

const VALID_USERNAME = 'asd@asd.asd';
const VALID_PASSWORD = 'asdasd';

class SignInScreen extends React.Component<Props, State> {
  state = {
    loading: false,
    error: false,
  };

  onLogInPressed = () => {
    const { loginForm } = this.props;
    this.setState({ loading: true, error: false });

    setTimeout(() => {
      this.setState({ loading: false });
      const { username, password } = loginForm.values;
      Alert.alert(username + ' ' + password);
    }, 2000);
  };

  validateFields = () => {
    const { touch } = this.props;
    touch('username');
    touch('password');
  };

  render() {
    const { valid: fieldsValid } = this.props;
    const actionDisabled = !fieldsValid;
    const { error, loading } = this.state;

    return (
      <Container>
        <Typography color="black" size={18}>
          Enter your account data
        </Typography>
        <Form.TextField
          name="username"
          label="Email"
          keyboardType="email-address"
        />
        <Form.TextField
          name="password"
          label="Password"
          secureTextEntry
          keyboardType="default"
        />
        {error && (
          <Typography color="black" size={12} textAlign="center">
            Something went wrong. Please try again later
          </Typography>
        )}
        <Spacing />
        <Button
          size="big"
          text={loading ? 'Loading...' : 'Sign In'}
          disabled={actionDisabled || loading}
          onPress={!actionDisabled ? this.onLogInPressed : this.validateFields}
        />
      </Container>
    );
  }
}

const VALIDATION_SCHEMA = yup.object().shape({
  username: yup
    .string()
    .email('Invalid email address')
    .required('Email address is required'),
  password: yup.string().required('Password is required'),
});

function mapStateToProps(store: Store) {
  return {
    loginForm: Form.mapFormToProps<Values>(store.form.login),
    initialValues: { username: VALID_USERNAME, password: VALID_PASSWORD },
  };
}

export default connect(
  mapStateToProps,
  null,
)(
  reduxForm<Values, ConnectProps>({
    form: 'login',
    destroyOnUnmount: true,
    asyncValidate: Form.validator(VALIDATION_SCHEMA),
  })(SignInScreen),
);
