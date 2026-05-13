"use strict";

/**
 * <app-site-footer>
 *
 * Cream-tinted footer (DESIGN.md is explicit: never dark). Carries
 * a closing wordmark, a small set of contact links, and a copyright
 * line. The horizon-style mountain row at the bottom is rendered with
 * pure-CSS clay shapes — no image assets required.
 *
 * Attributes: none
 * Events dispatched: none
 * Expected children: none
 * CSS: styles/organisms/site-footer.css
 */
class SiteFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();

    this.innerHTML = `
      <footer class="site-footer">
        <div class="site-footer__legal">
          <a href="https://www.linkedin.com/in/bellecwy" target="_blank" rel="noopener" class="site-footer__linkedin">LinkedIn →</a>
          <span>© ${year} Belle Chan. Crafted with care.</span>
        </div>
      </footer>
    `;
  }

  disconnectedCallback() {
    // No window/document listeners to remove
  }
}

customElements.define('app-site-footer', SiteFooter);
