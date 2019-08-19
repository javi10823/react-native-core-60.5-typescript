import { createStackNavigator } from 'react-navigation';
import { Home, FetchExample, DeviceInfo } from '../screens';

const noHeader = { header: null };

const stack = {
  Home: {
    screen: Home,
    navigationOptions: noHeader,
  },
  FetchExample: {
    screen: FetchExample,
    navigationOptions: noHeader,
  },
  DeviceInfo: {
    screen: DeviceInfo,
    navigationOptions: noHeader,
  },
};

export const MainStack = createStackNavigator(stack);
export type MainRoutes = keyof typeof stack;
