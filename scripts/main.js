"use strict";

/**
 * Module: main.js
 * Type: Entry point
 * Purpose: Application initialization. Registers shared web components
 *          (nav, footer, cta-band) so every page can use them.
 *
 * Depends on:
 *   - config.js (application config)
 *
 * Used by: index.html and every project page
 * Side effects: Registers custom elements; logs in dev mode
 */

import { CONFIG } from './config.js';

import '../web-components/site-nav.js';
import '../web-components/site-footer.js';
import '../web-components/cta-band.js';
import '../web-components/image-lightbox.js';

const init = () => {
  if (CONFIG.DEV_MODE) {
    console.log(`[${CONFIG.APP_NAME}] Running in dev mode`);
  }
};

document.addEventListener('DOMContentLoaded', init);
