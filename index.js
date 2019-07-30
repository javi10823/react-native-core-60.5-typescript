import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Sentry, SentryLog } from 'react-native-sentry';

import { getConfig } from './src/config';

const config = getConfig();

if (!config.isDev) {
  Sentry.config(config.SENTRY_DSN, {
    deactivateStacktraceMerging: false,
    logLevel: SentryLog.Debug,
    disableNativeIntegration: false,
    handlePromiseRejection: true,
  }).install();
}

AppRegistry.registerComponent(appName, () => App);
