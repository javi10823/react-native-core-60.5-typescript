import {
  createStackNavigator,
  StackNavigatorConfig,
  NavigationScreenProp
} from "react-navigation";

import WelcomeScreen from "../screens/welcome";

import { styles } from "./styles";

const defaultNavigationOptions = ({
  navigation
}: {
  navigation: NavigationScreenProp<any>;
}) => ({
  headerTitle: navigation.state.routeName,
  headerTitleStyle: styles.headerTitle,
  headerStyle: styles.headerStyle
});

const stackConfig: StackNavigatorConfig = {
  defaultNavigationOptions
};

const noHeader = {
  header: null
};

export const MainStack = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: noHeader
    }
  },
  stackConfig
);
