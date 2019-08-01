import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { Sentry, SentryLog } from "react-native-sentry";

import { SENTRY_DSN } from "react-native-dotenv";

if (!__DEV__) {
  Sentry.config(SENTRY_DSN, {
    deactivateStacktraceMerging: false,
    logLevel: SentryLog.Debug,
    disableNativeIntegration: false,
    handlePromiseRejection: true
  }).install();
}

AppRegistry.registerComponent(appName, () => App);
