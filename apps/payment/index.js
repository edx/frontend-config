import defaultConfig, { APP_ENV } from '../../defaults/config';

const environments = {
  development: {
    // URLs
    BASE_URL: 'localhost:1998',
    CYBERSOURCE_URL: 'http://localhost:18130/cybersource',

    // Identifiers
    SEGMENT_KEY: null,

    // ApplePay
    APPLE_PAY_MERCHANT_NAME: 'Open edX E-Commerce',
    APPLE_PAY_COUNTRY_CODE: 'US',
    APPLE_PAY_CURRENCY_CODE: 'USD',
    APPLE_PAY_START_SESSION_URL: 'http://localhost:18130/payment/cybersource/apple-pay/start-session/',
    APPLE_PAY_AUTHORIZE_URL: 'http://localhost:18130/payment/cybersource/apple-pay/authorize/',
    APPLE_PAY_SUPPORTED_NETWORKS: 'amex,discover,visa,masterCard',
    APPLE_PAY_MERCHANT_CAPABILITIES: 'supports3DS,supportsCredit,supportsDebit',
  },
  test: {
    // URLs
    BASE_URL: 'localhost:1998',
    CYBERSOURCE_URL: 'http://localhost:18130/cybersource',

    // Identifiers
    SEGMENT_KEY: null,

    // ApplePay
    APPLE_PAY_MERCHANT_NAME: 'Open edX E-Commerce',
    APPLE_PAY_COUNTRY_CODE: 'US',
    APPLE_PAY_CURRENCY_CODE: 'USD',
    APPLE_PAY_START_SESSION_URL: 'http://localhost:18130/payment/cybersource/apple-pay/start-session/',
    APPLE_PAY_AUTHORIZE_URL: 'http://localhost:18130/payment/cybersource/apple-pay/authorize/',
    APPLE_PAY_SUPPORTED_NETWORKS: 'amex,discover,visa,masterCard',
    APPLE_PAY_MERCHANT_CAPABILITIES: 'supports3DS,supportsCredit,supportsDebit',
  },
  staging: {
    // URLs
    BASE_URL: "https://payment.stage.example.com",
    CYBERSOURCE_URL: "https://testsecureacceptance.cybersource.com/silent/pay",

    // Identifiers
    SEGMENT_KEY: null,

    // ApplePay
    APPLE_PAY_MERCHANT_NAME: "'Open edX E-Commerce'",
    APPLE_PAY_COUNTRY_CODE: "US",
    APPLE_PAY_CURRENCY_CODE: "USD",
    APPLE_PAY_START_SESSION_URL: "https://ecommerce.stage.example.com/payment/cybersource/apple-pay/,start-session/",
    APPLE_PAY_AUTHORIZE_URL: "https://ecommerce.stage.example.com/payment/cybersource/apple-pay/,authorize/",
    APPLE_PAY_SUPPORTED_NETWORKS: "amex,discover,visa,masterCard",
    APPLE_PAY_MERCHANT_CAPABILITIES: "supports3DS,supportsCredit,supportsDebit",
  },
  production: {
    // URLs
    BASE_URL: "https://payment.example.com",
    CYBERSOURCE_URL: "https://secureacceptance.cybersource.com/silent/pay",

    // Identifiers
    SEGMENT_KEY: null,

    // ApplePay
    APPLE_PAY_MERCHANT_NAME: "'Open edX E-Commerce'",
    APPLE_PAY_COUNTRY_CODE: "US",
    APPLE_PAY_CURRENCY_CODE: "USD",
    APPLE_PAY_START_SESSION_URL: "https://ecommerce.example.com/payment/cybersource/apple-pay/start-session/",
    APPLE_PAY_AUTHORIZE_URL: "https://ecommerce.example.com/payment/cybersource/apple-pay/authorize/",
    APPLE_PAY_SUPPORTED_NETWORKS: "amex,discover,visa,masterCard",
    APPLE_PAY_MERCHANT_CAPABILITIES: "supports3DS,supportsCredit,supportsDebit",
  }
}

export const config = {
  ...defaultConfig,
  ...environments[APP_ENV],
}

export { default as plugins } from '../../defaults/plugins';