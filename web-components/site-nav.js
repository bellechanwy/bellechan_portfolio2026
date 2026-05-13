"use strict";

/**
 * <app-site-nav>
 *
 * Cream top navigation. Pinned to the top of every page. Carries the
 * wordmark on the left, primary nav links centre, and a dark "Let's talk"
 * CTA on the right. Mobile collapses to a hamburger that toggles a
 * full-width drawer.
 *
 * Attributes:
 *   - active (string): "home" | "work" | "about" | "contact" — applies
 *                      the underlined treatment to the matching link.
 *
 * Events dispatched:
 *   - app:nav-toggle (detail: { open: boolean })
 *
 * Expected children: none
 * CSS: styles/organisms/site-nav.css
 */
class SiteNav extends HTMLElement {
  static get observedAttributes() {
    return ['active'];
  }

  connectedCallback() {
    const active = this.getAttribute('active') || '';
    this.innerHTML = `
      <nav class="site-nav" aria-label="Main navigation">
        <div class="site-nav__inner">
          <a class="site-nav__brand" href="/" aria-label="Belle Chan, home">
            <span class="site-nav__brand-mark" aria-hidden="true"></span>
            <span class="site-nav__brand-name">Belle Chan</span>
          </a>

          <button
            class="site-nav__toggle"
            type="button"
            aria-controls="site-nav-menu"
            aria-expanded="false"
            aria-label="Toggle navigation menu"
          >
            <span class="site-nav__toggle-bar" aria-hidden="true"></span>
            <span class="site-nav__toggle-bar" aria-hidden="true"></span>
          </button>

          <div class="site-nav__menu" id="site-nav-menu" data-open="false">
            <ul class="site-nav__links" role="list">
              <li><a href="/#work" data-link="work" class="site-nav__link${active === 'work' ? ' is-active' : ''}">Work</a></li>
              <li><a href="/#about" data-link="about" class="site-nav__link${active === 'about' ? ' is-active' : ''}">About</a></li>
              <li><a href="/#process" data-link="process" class="site-nav__link${active === 'process' ? ' is-active' : ''}">Process</a></li>
              <li><a href="/#contact" data-link="contact" class="site-nav__link${active === 'contact' ? ' is-active' : ''}">Contact</a></li>
            </ul>
            <a class="btn btn--primary site-nav__cta" href="mailto:hello@bellechan.design">Let's talk</a>
          </div>
        </div>
      </nav>
    `;

    const toggle = this.querySelector('.site-nav__toggle');
    const menu = this.querySelector('.site-nav__menu');

    this._onToggle = () => {
      const open = menu.dataset.open !== 'true';
      menu.dataset.open = String(open);
      toggle.setAttribute('aria-expanded', String(open));
      this.dispatchEvent(new CustomEvent('app:nav-toggle', {
        detail: { open },
        bubbles: true
      }));
    };

    this._onLinkClick = (event) => {
      if (event.target.closest('.site-nav__link')) {
        menu.dataset.open = 'false';
        toggle.setAttribute('aria-expanded', 'false');
      }
    };

    toggle.addEventListener('click', this._onToggle);
    menu.addEventListener('click', this._onLinkClick);
  }

  disconnectedCallback() {
    const toggle = this.querySelector('.site-nav__toggle');
    const menu = this.querySelector('.site-nav__menu');
    if (toggle && this._onToggle) toggle.removeEventListener('click', this._onToggle);
    if (menu && this._onLinkClick) menu.removeEventListener('click', this._onLinkClick);
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal === newVal) return;
    if (name === 'active') {
      this.querySelectorAll('.site-nav__link').forEach((link) => {
        const matches = link.dataset.link === newVal;
        link.classList.toggle('is-active', matches);
      });
    }
  }
}

customElements.define('app-site-nav', SiteNav);
