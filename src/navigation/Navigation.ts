import {
  NavigationState,
  NavigationParams,
  NavigationRoute,
  NavigationContainer,
  NavigationDispatch,
  NavigationActions,
  StackActions,
} from 'react-navigation';

import { Routes } from './AppNavigator';

export type CustomNavigationContainer = {
  dispatch: NavigationDispatch;
  state: {
    nav: NavigationState;
  };
} & NavigationContainer;

let navigator: CustomNavigationContainer;

function setTopLevelNavigator(navigatorRef: CustomNavigationContainer) {
  navigator = navigatorRef;
}

export function goToPage(routeName: Routes, params: NavigationParams | undefined = {}) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

export function goBack(key: string | null = null) {
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
  if (route.routes) return getActiveRouteParams(route);
  return route.params;
}

function getActiveRouteName(navigationState: NavigationState | NavigationRoute): string {
  if (!navigationState) navigationState = navigator.state.nav;
  const route = navigationState.routes[navigationState.index];
  if (route.routes) return getActiveRouteName(route);
  return route.routeName;
}

export default {
  goToPage,
  setTopLevelNavigator,
  goBack,
  reset,
  getActiveRouteName,
  getActiveRouteParams,
};
