import { createSwitchNavigator, createAppContainer } from "react-navigation";

import { MainStack } from "./MainTabNavigator";
import { AuthStack } from "./AuthNavigation";
import Welcome from "../screens/welcome";

const AppStack = createSwitchNavigator(
  {
    Main: MainStack,
    Welcome,
    Auth: AuthStack
  },
  {
    initialRouteName: "Welcome"
  }
);

export default createAppContainer(AppStack);
