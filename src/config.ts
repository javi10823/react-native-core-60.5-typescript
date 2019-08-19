import {
  // @ts-ignore
  STAGING_API_URL,
  // @ts-ignore
  PRODUCTION_API_URL,
  // @ts-ignore
  SENTRY_DSN,
  // @ts-ignore
  REDUX_LOGGER_ACTIVATED,
  // @ts-ignore
  API_CONNECTOR_LOGS_ACTIVATED,
} from 'react-native-dotenv';

const isProduction = true;
console.log(`\n\n`, 'IS_PRODUCTION_MODE', isProduction, `\n\n\n`);
console.log(`\n\n`, 'REDUX_LOGGER_ACTIVATED', REDUX_LOGGER_ACTIVATED, `\n\n\n`);
console.log(`\n\n`, 'API_CONNECTOR_LOGS_ACTIVATED', API_CONNECTOR_LOGS_ACTIVATED, `\n\n\n`);

interface Config {
  isDev: boolean;
  API_URL: string;
  SENTRY_DSN: string;
  REDUX_LOGGER_ACTIVATED: boolean;
}

const Config = {
  isDev: __DEV__,
  API_URL: isProduction ? PRODUCTION_API_URL : STAGING_API_URL,
  SENTRY_DSN,
  REDUX_LOGGER_ACTIVATED: REDUX_LOGGER_ACTIVATED === 'true',
  API_CONNECTOR_LOGS_ACTIVATED: API_CONNECTOR_LOGS_ACTIVATED === 'true',
};

export default Config;
