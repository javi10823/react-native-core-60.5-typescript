// @ts-ignore
import { API_URL, SENTRY_DSN } from 'react-native-dotenv';
import { Config } from './interfaces';

export const getConfig = (): Config => {
  const config = {
    isDev: __DEV__,
    API_URL,
    SENTRY_DSN,
  };
  return config;
};

export const config: Config = getConfig();
