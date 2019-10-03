# frontend-config

# Getting Started

This repo is a template for frontend configuration libraries.

A frontend configuration library is intended to be used with an NPM alias during the build process to replace references to frontend-config (this repository).  Because of this, having a standardized interface for loading config information is important.  We could provide a utility to validate it, perhaps, if it becomes painful.

## NODE_ENV and APP_ENV

A Frontend Config may assume that two environment variables will be set via `process.env`.  

### NODE_ENV

This is a standard NODE_ENV variable.  It will generally be `production`, `development`, or `test`.  

### DEPLOY_ENV

This is more granular than NODE_ENV, and represents the deploy environment.  This is generally `staging` or `production`.  Note that we do not set a `staging` NODE_ENV because many JavaScript libraries use a `production` NODE_ENV to indicate that they should enable optimizations and disable debugging code - setting NODE_ENV to `staging` would circumvent this.

## Application-specific subdirectories

A Frontend Config must contain a directory called `apps` with subdirectories for the supported applications.  At a minimum this must include `profile` and `payment` subdirectories.  As more applications are converted to use frontend-config, they must be added as subdirectories.

## apps/<APP_NAME>/index.js

An application-specific subdirectory must include an index.js file.  This file must provide two exports.

### config

A JSON configuration document.  It must contain values for the following keys:

- CREDENTIALS_BASE_URL
- ECOMMERCE_BASE_URL
- LMS_BASE_URL
- LOGIN_URL
- LOGOUT_URL
- MARKETING_SITE_BASE_URL
- ORDER_HISTORY_URL
- SUPPORT_URL
- REFRESH_ACCESS_TOKEN_ENDPOINT
- SITE_NAME
- CSRF_TOKEN_API_PATH
- ACCESS_TOKEN_COOKIE_NAME
- LANGUAGE_PREFERENCE_COOKIE_NAME
- USER_INFO_COOKIE_NAME

It may optionally include any other keys that the application needs.

### plugins

An Object representing the application's plugin configuration.  Each key in the Object represents a known plugin slot identifier.

Currently the only two valid plugin slots are:

```
{
  header: <Plugin Configuration>,
  footer: <Plugin Configuration>,
}
```

#### Plugin Configuration

The plugin configuration must be an Object of the following shape:

```
{
  Component: <React Component for plugin>,
  messages: <i18n messages object>,
  config: <configuration JSON object for custom config>
}
```

## apps/<APP_NAME>/index.scss

An application-specific subdirectory must include an index.scss file, representing CSS overrides (a CSS theme).  The file may be empty, but it must exist.
