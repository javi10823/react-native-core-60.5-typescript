"use strict";
exports.__esModule = true;
// @ts-ignore
var react_native_dotenv_1 = require("react-native-dotenv");
exports.getConfig = function () {
    var config = {
        isDev: __DEV__,
        API_URL: react_native_dotenv_1.API_URL,
        SENTRY_DSN: react_native_dotenv_1.SENTRY_DSN
    };
    return config;
};
exports.config = exports.getConfig();
