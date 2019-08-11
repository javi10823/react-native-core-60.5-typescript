import { createStackNavigator, NavigationParams } from 'react-navigation';
import { SignIn, Welcome } from '../screens';

const noHeader = { header: null };

export const AuthStack = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: noHeader,
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: noHeader,
  },
});

export type AuthNavigateActions =
  | { routeName: 'Welcome'; params?: NavigationParams }
  | { routeName: 'SignIn'; params?: NavigationParams };
