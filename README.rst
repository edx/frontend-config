frontend-config (THIS REPO IS A WORK IN PROGRESS - IT IS NOT IN USE YET)
========================================================================

|Build Status| |NPM Version| |npm_downloads| |license|
|semantic release|

Getting Started
===============

This repo is a template for frontend configuration libraries.

A frontend configuration library is intended to be used with an NPM
alias during the build process to replace references to frontend-config
(this repository). The application then imports ``config`` and
``plugins`` from this repo and uses it to configure itself.

Because of this, having a standardized interface for loading config
information is important. We could provide a utility to validate it,
perhaps, if it becomes painful.

NODE_ENV and APP_ENV
--------------------

A Frontend Config may assume that two environment variables will be set
via ``process.env``.

NODE_ENV
~~~~~~~~

This is a standard NODE_ENV variable. It will generally be
``production``, ``development``, or ``test``.

DEPLOY_ENV
~~~~~~~~~~

This is more granular than NODE_ENV, and represents the deploy
environment. This is generally ``staging`` or ``production``. Note that
we do not set a ``staging`` NODE_ENV because many JavaScript libraries
use a ``production`` NODE_ENV to indicate that they should enable
optimizations and disable debugging code - setting NODE_ENV to
``staging`` would circumvent this.

Application-specific subdirectories
-----------------------------------

A Frontend Config must contain a directory called ``apps`` with
subdirectories for the supported applications. At a minimum this must
include ``profile`` and ``payment`` subdirectories. As more applications
are converted to use frontend-config, they must be added as
subdirectories.

apps//index.js
--------------

An application-specific subdirectory must include an index.js file.
Because application subdirectories are imported directly by the app, the
other subdirectories will be tree-shaken out of the build, along with
any dependencies (i.e., plugins like a header or footer) they may depend
on.

This file must provide two exports.

config
~~~~~~

A JSON configuration document. It must contain values for the following
keys:

-  CREDENTIALS_BASE_URL
-  ECOMMERCE_BASE_URL
-  LMS_BASE_URL
-  LOGIN_URL
-  LOGOUT_URL
-  MARKETING_SITE_BASE_URL
-  ORDER_HISTORY_URL
-  SUPPORT_URL
-  REFRESH_ACCESS_TOKEN_ENDPOINT
-  SITE_NAME
-  CSRF_TOKEN_API_PATH
-  ACCESS_TOKEN_COOKIE_NAME
-  LANGUAGE_PREFERENCE_COOKIE_NAME
-  USER_INFO_COOKIE_NAME

It may optionally include any other keys that the application needs.

plugins
~~~~~~~

An Object representing the application’s plugin configuration. Each key
in the Object represents a known plugin slot identifier.

Currently the only two valid plugin slots are:

::

   {
     header: <Plugin Configuration>,
     footer: <Plugin Configuration>,
   }

Plugin Configuration
^^^^^^^^^^^^^^^^^^^^

The plugin configuration must be an Object of the following shape:

::

   {
     Component: <React Component for plugin>,
     messages: <i18n messages object>,
     config: <configuration JSON object for custom config>
   }

apps//index.scss
----------------

An application-specific subdirectory must include an index.scss file,
representing CSS overrides (a CSS theme). The file may be empty, but it
must exist.

Important Notes
===============

This method of configuration does not fully replace our environment
variable configuration that’s currently in use.

There are some env vars that are used specifically by the build process,
and in theory there could be some that are private. There are also two
environment variables needed *by* this method.

Some examples:

-  APPLE_DEVELOPER_MERCHANT_ID_DOMAIN_ASSOCIATION - used in build
   process for payment
-  BASE_URL - used by webpack (duplicated here)
-  NEW_RELIC_APP_ID - used by webpack
-  NEW_RELIC_LICENSE_KEY - used by webpack
-  NEW_RELIC_ADMIN_KEY - used by webpack… weirdly I don’t see it set
   anywhere.
-  NODE_ENV
-  DEPLOY_ENV - *new* and informs this repo what deploy environment the
   code is for - staging or production.

There are also many environment variables not covered by this repo that
are used by other micro-frontends. Presumably they’d need to be added
here as those MFEs are configured via this method.

-  CURRENCY_COOKIE_NAME - used by payment… not set anywhere?

.. |Build Status| image:: https://api.travis-ci.org/edx/frontend-config.svg?branch=master
   :target: https://travis-ci.org/edx/frontend-config
.. |NPM Version| image:: https://img.shields.io/npm/v/@edx/frontend-config.svg
   :target: https://www.npmjs.com/package/@edx/frontend-config
.. |npm_downloads| image:: https://img.shields.io/npm/dt/@edx/frontend-config.svg
   :target: https://www.npmjs.com/package/@edx/frontend-config
.. |license| image:: https://img.shields.io/npm/l/@edx/frontend-config.svg
   :target: https://github.com/edx/frontend-config/blob/master/LICENSE
.. |semantic release| image:: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
   :target: https://github.com/semantic-release/semantic-release
