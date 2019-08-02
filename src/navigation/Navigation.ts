import {
  NavigationState,
  NavigationParams,
  NavigationRoute,
  NavigationContainer,
  NavigationDispatch,
  NavigationActions,
  StackActions,
} from 'react-navigation';

export type CustomNavigationContainer = {
  dispatch: NavigationDispatch;
  state: {
    nav: NavigationState;
  };
} & NavigationContainer;

/* 
    Type your screen params as you need it and add 
    them to the corresponding screen in the NavigateAction below 
  */
export type NavigateAction =
  | { routeName: 'Welcome'; params?: NavigationParams }
  | { routeName: 'SignIn'; params?: NavigationParams }
  | { routeName: 'Components'; params?: NavigationParams };
let navigator: CustomNavigationContainer;

function setTopLevelNavigator(navigatorRef: CustomNavigationContainer) {
  navigator = navigatorRef;
}

/**
 * Navigate to a new screen. Make sure to type your screen here so it's available for navigation
 */
export function navigate({ routeName, params }: NavigateAction) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function goBack(key: string | null = null) {
  navigator.dispatch(NavigationActions.back({ key }));
}

function reset(routeName: string, params: NavigationParams) {
  navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName,
          params,
        }),
      ],
    }),
  );
}

function getActiveRouteParams(
  navigationState: NavigationState | NavigationRoute,
): NavigationParams | undefined {
  if (!navigationState) navigationState = navigator.state.nav;
  const route = navigationState.routes[navigationState.index];

  // dive into nested navigators
  if (route.routes) return getActiveRouteParams(route);

  return route.params;
}

function getActiveRouteName(
  navigationState: NavigationState | NavigationRoute,
): string {
  if (!navigationState) navigationState = navigator.state.nav;
  const route = navigationState.routes[navigationState.index];

  // dive into nested navigators
  if (route.routes) return getActiveRouteName(route);

  return route.routeName;
}

export default {
  navigate,
  setTopLevelNavigator,
  goBack,
  reset,
  getActiveRouteName,
  getActiveRouteParams,
};
