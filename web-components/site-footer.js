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
        <div class="site-footer__inner">
          <div class="site-footer__lede">
            <p class="site-footer__eyebrow">Currently booking July → September</p>
            <h2 class="site-footer__display">
              Got a product story<br>worth telling?
            </h2>
            <a class="btn btn--primary btn--lg" href="mailto:hello@bellechan.design">
              hello@bellechan.design
            </a>
          </div>

          <div class="site-footer__columns">
            <div class="site-footer__col">
              <h3 class="site-footer__col-title">Sitemap</h3>
              <ul role="list">
                <li><a href="/#work">Work</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#process">Process</a></li>
                <li><a href="/#contact">Contact</a></li>
              </ul>
            </div>
            <div class="site-footer__col">
              <h3 class="site-footer__col-title">Elsewhere</h3>
              <ul role="list">
                <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener">LinkedIn</a></li>
                <li><a href="https://dribbble.com/" target="_blank" rel="noopener">Dribbble</a></li>
                <li><a href="https://www.behance.net/" target="_blank" rel="noopener">Behance</a></li>
                <li><a href="https://read.cv/" target="_blank" rel="noopener">Read.cv</a></li>
              </ul>
            </div>
            <div class="site-footer__col">
              <h3 class="site-footer__col-title">Studio</h3>
              <ul role="list">
                <li>Singapore · GMT +8</li>
                <li>Available worldwide</li>
                <li><a href="mailto:hello@bellechan.design">hello@bellechan.design</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="site-footer__horizon" aria-hidden="true">
          <span class="clay-mountain clay-fill-teal site-footer__mountain site-footer__mountain--a"></span>
          <span class="clay-mountain clay-fill-ochre site-footer__mountain site-footer__mountain--b"></span>
          <span class="clay-mountain clay-fill-pink site-footer__mountain site-footer__mountain--c"></span>
          <span class="clay-mountain clay-fill-lavender site-footer__mountain site-footer__mountain--d"></span>
          <span class="clay-mountain clay-fill-peach site-footer__mountain site-footer__mountain--e"></span>
        </div>

        <div class="site-footer__legal">
          <span>© ${year} Belle Chan. Crafted with care.</span>
          <span>Designed in Figma · Built in vanilla HTML, CSS, JS.</span>
        </div>
      </footer>
    `;
  }

  disconnectedCallback() {
    // No window/document listeners to remove
  }
}

customElements.define('app-site-footer', SiteFooter);
