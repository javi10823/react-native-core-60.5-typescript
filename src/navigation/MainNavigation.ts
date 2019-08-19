import { createStackNavigator } from 'react-navigation';
import { Home, FetchExample } from '../screens';

const noHeader = { header: null };

export const MainStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: noHeader,
  },
  FetchExample: {
    screen: FetchExample,
    navigationOptions: noHeader,
  },
});

export type MainRoutes = 'Home' | 'FetchExample';
