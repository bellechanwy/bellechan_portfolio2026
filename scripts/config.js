"use strict";

/**
 * Module: config.js
 * Type: Config
 * Purpose: All constants, URLs, feature flags, timeouts.
 *
 * Depends on: nothing
 * Used by: effect modules, main.js, web components
 * Side effects: None
 */

export const CONFIG = Object.freeze({
  APP_NAME: 'Belle Chan — Portfolio',
  CONTACT_EMAIL: 'hello@bellechan.design',
  API_BASE: import.meta.env.VITE_API_BASE || '',
  DEV_MODE: import.meta.env.DEV
});
