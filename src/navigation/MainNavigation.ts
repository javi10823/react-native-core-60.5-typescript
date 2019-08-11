import { createStackNavigator, NavigationParams } from 'react-navigation';
import { Home } from '../screens';

const noHeader = { header: null };

export const MainStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: noHeader,
  },
});

export type MainNavigateActions =
  | { routeName: 'Home'; params?: NavigationParams }
  | { routeName: 'Home'; params?: NavigationParams }; // when new screen -> change routeName
