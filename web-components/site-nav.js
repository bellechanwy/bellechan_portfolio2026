"use strict";

/**
 * <app-site-nav>
 *
 * Cream top navigation. Pinned to the top of every page. Carries the
 * wordmark on the left and two nav links (About, Work) on the right.
 * Mobile collapses to a hamburger drawer.
 *
 * Active link is determined automatically via IntersectionObserver on
 * sections that have a matching data-link id (#about, #work). No static
 * `active` attribute is needed on the homepage — the observer handles it.
 * On project pages set `active="work"` to pin the Work link.
 *
 * Attributes:
 *   - active (string): "about" | "work" — pins an active link statically
 *                      (used on pages without observed sections).
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
    const pinned = this.getAttribute('active') || '';

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
              <li><a href="/" data-link="about" class="site-nav__link">About</a></li>
              <li><a href="/#work" data-link="work" class="site-nav__link">Work</a></li>
            </ul>
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

    if (pinned) {
      this._setActive(pinned);
      return;
    }

    this._initObserver();
  }

  _setActive(key) {
    this.querySelectorAll('.site-nav__link').forEach((link) => {
      link.classList.toggle('is-active', link.dataset.link === key);
    });
  }

  _initObserver() {
    // Map section ids → nav link keys. Sections must have matching ids in the page.
    const sectionMap = { about: 'about', work: 'work' };
    const navHeight = 72;

    // Track which sections are currently intersecting; highlight the topmost one.
    const visible = new Set();

    const pick = () => {
      const order = Object.keys(sectionMap);
      const current = order.find((id) => visible.has(id)) || null;
      this._setActive(current ? sectionMap[current] : 'about');
    };

    this._observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visible.add(id);
          } else {
            visible.delete(id);
          }
        });
        pick();
      },
      {
        // Shrink the top of the viewport by the nav height so the nav
        // bar itself doesn't count as part of the visible area.
        rootMargin: `-${navHeight}px 0px 0px 0px`,
        threshold: 0.1
      }
    );

    Object.keys(sectionMap).forEach((id) => {
      const el = document.getElementById(id);
      if (el) this._observer.observe(el);
    });

    // Default to "about" on load before any scroll
    this._setActive('about');
  }

  disconnectedCallback() {
    const toggle = this.querySelector('.site-nav__toggle');
    const menu = this.querySelector('.site-nav__menu');
    if (toggle && this._onToggle) toggle.removeEventListener('click', this._onToggle);
    if (menu && this._onLinkClick) menu.removeEventListener('click', this._onLinkClick);
    if (this._observer) this._observer.disconnect();
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal === newVal || !this.isConnected) return;
    if (name === 'active') this._setActive(newVal);
  }
}

customElements.define('app-site-nav', SiteNav);
