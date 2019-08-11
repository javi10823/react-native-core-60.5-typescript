import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import { MainStack, MainNavigateActions } from './MainNavigation';
import { AuthStack, AuthNavigateActions } from './AuthNavigation';

const AppStack = createSwitchNavigator(
  {
    Auth: AuthStack,
    Main: MainStack,
  },
  { initialRouteName: 'Auth' },
);

export default createAppContainer(AppStack);

export type NavigateAction = MainNavigateActions | AuthNavigateActions;
