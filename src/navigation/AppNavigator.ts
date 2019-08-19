import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import { MainStack, MainRoutes } from './MainNavigation';
import { AuthStack, AuthRoutes } from './AuthNavigation';

const AppStack = createSwitchNavigator(
  {
    Auth: AuthStack,
    Main: MainStack,
  },
  { initialRouteName: 'Auth' },
);

export default createAppContainer(AppStack);

export type Routes = MainRoutes | AuthRoutes;
