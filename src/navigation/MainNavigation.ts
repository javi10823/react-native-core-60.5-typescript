import { createStackNavigator } from 'react-navigation';
import { createFluidNavigator } from 'react-navigation-fluid-transitions';
import { Home, FetchExample, DeviceInfo, TransitionExample } from '../screens';

const noHeader = { header: null };

const fluidStack = {
  Home: {
    screen: Home,
  },
  TransitionExample: {
    screen: TransitionExample,
  },
};

const stack = {
  HomeNavigator: createFluidNavigator(fluidStack, { defaultNavigationOptions: noHeader }),
  FetchExample: {
    screen: FetchExample,
  },
  DeviceInfo: {
    screen: DeviceInfo,
  },
};

export const MainStack = createStackNavigator(stack, { defaultNavigationOptions: noHeader });
export type MainRoutes = keyof typeof stack | keyof typeof fluidStack;
