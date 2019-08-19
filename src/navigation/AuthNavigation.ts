import { createStackNavigator } from 'react-navigation';
import { SignIn, Welcome } from '../screens';

const noHeader = { header: null };

const stack = {
  Welcome: {
    screen: Welcome,
    navigationOptions: noHeader,
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: noHeader,
  },
};

export const AuthStack = createStackNavigator(stack);
export type AuthRoutes = keyof typeof stack;
