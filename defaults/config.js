const environments = {
  development: {
    // URLs
    CREDENTIALS_BASE_URL: 'http://localhost:18150',
    ECOMMERCE_BASE_URL: 'http://localhost:18130',
    LMS_BASE_URL: 'http://localhost:18000',
    LOGIN_URL: 'http://localhost:18000/login',
    LOGOUT_URL: 'http://localhost:18000/login',
    MARKETING_SITE_BASE_URL: 'http://localhost:18000',
    ORDER_HISTORY_URL: 'localhost:1996/orders',
    SUPPORT_URL: 'http://localhost:18000/support',
    REFRESH_ACCESS_TOKEN_ENDPOINT: 'http://localhost:18000/login_refresh',

    // Misc
    SITE_NAME: 'edX',

    // Paths
    CSRF_TOKEN_API_PATH: '/csrf/api/v1/token',

    // Cookie names
    ACCESS_TOKEN_COOKIE_NAME: 'edx-jwt-cookie-header-payload',
    LANGUAGE_PREFERENCE_COOKIE_NAME: 'openedx-language-preference',
    USER_INFO_COOKIE_NAME: 'edx-user-info',
  },
  test: {
    // URLs
    CREDENTIALS_BASE_URL: 'http://localhost:18150',
    ECOMMERCE_BASE_URL: 'http://localhost:18130',
    LMS_BASE_URL: 'http://localhost:18000',
    LOGIN_URL: 'http://localhost:18000/login',
    LOGOUT_URL: 'http://localhost:18000/login',
    MARKETING_SITE_BASE_URL: 'http://localhost:18000',
    ORDER_HISTORY_URL: 'localhost:1996/orders',
    SUPPORT_URL: 'http://localhost:18000/support',
    REFRESH_ACCESS_TOKEN_ENDPOINT: 'http://localhost:18000/login_refresh',

    // Misc
    SITE_NAME: 'edX',

    // Paths
    CSRF_TOKEN_API_PATH: '/csrf/api/v1/token',

    // Cookie names
    ACCESS_TOKEN_COOKIE_NAME: 'edx-jwt-cookie-header-payload',
    LANGUAGE_PREFERENCE_COOKIE_NAME: 'openedx-language-preference',
    USER_INFO_COOKIE_NAME: 'edx-user-info',
  },
  staging: {
    // URLs
    CREDENTIALS_BASE_URL: "https://credentials.stage.example.com",
    ECOMMERCE_BASE_URL: "https://ecommerce.stage.example.com",
    LMS_BASE_URL: "https://courses.stage.example.com",
    LOGIN_URL: "https://courses.stage.example.com/login",
    LOGOUT_URL: "https://courses.stage.example.com/logout",
    MARKETING_SITE_BASE_URL: "https://stage.example.com",
    ORDER_HISTORY_URL: "https://orders.stage.example.com/orders",
    SUPPORT_URL: "https://support.example.com",
    REFRESH_ACCESS_TOKEN_ENDPOINT: "https://courses.stage.example.com/login_refresh",

    // Misc
    SITE_NAME: "edX",

    // Paths
    CSRF_TOKEN_API_PATH: "/csrf/api/v1/token",

    // Cookie names
    ACCESS_TOKEN_COOKIE_NAME: "stage-edx-jwt-cookie-header-payload",
    LANGUAGE_PREFERENCE_COOKIE_NAME: "stage-edx-language-preference",
    USER_INFO_COOKIE_NAME: "stage-edx-user-info",
  },
  production: {
    // URLs
    CREDENTIALS_BASE_URL: 'https://credentials.example.com',
    ECOMMERCE_BASE_URL: 'https://ecommerce.example.com',
    LMS_BASE_URL: 'https://courses.example.com',
    LOGIN_URL: 'https://courses.example.com/login',
    LOGOUT_URL: 'https://courses.example.com/logout',
    MARKETING_SITE_BASE_URL: 'https://www.example.com',
    ORDER_HISTORY_URL: 'https://orders.example.com/orders',
    SUPPORT_URL: 'https://support.example.com',
    REFRESH_ACCESS_TOKEN_ENDPOINT: 'https://courses.example.com/login_refresh',

    // Misc
    SITE_NAME: "edX",

    // Paths
    CSRF_TOKEN_API_PATH: '/csrf/api/v1/token',

    // Cookie names
    ACCESS_TOKEN_COOKIE_NAME: 'edx-jwt-cookie-header-payload',
    LANGUAGE_PREFERENCE_COOKIE_NAME: 'prod-edx-language-preference',
    USER_INFO_COOKIE_NAME: 'prod-edx-user-info'
  }
}

const env = {
  ...environments[APP_ENV],
  APP_ENV,
  NODE_ENV,
}

export default env;