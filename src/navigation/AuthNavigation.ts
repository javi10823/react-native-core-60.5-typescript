import {
  createStackNavigator,
  StackNavigatorConfig,
  NavigationScreenProp
} from "react-navigation";

import SignIn from "../screens/authentication";
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

export const AuthStack = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        headerTitle: "Sign In"
      }
    }
  },
  stackConfig
);
