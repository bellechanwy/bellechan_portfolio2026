"use strict";

/**
 * <app-cta-band>
 *
 * Pre-footer "let's work together" band. Cream surface-soft background,
 * 24px rounded, 80px padding. Carries an h2 in display-md, a sub-line,
 * and a primary button. Mirrors cta-band-illustrated from DESIGN.md.
 *
 * Attributes:
 *   - heading (string): main heading text.
 *   - sub (string): sub-headline text.
 *   - cta-label (string): button label.
 *   - cta-href (string): button destination.
 *
 * Events dispatched: none
 * Expected children: none
 * CSS: styles/organisms/cta-band.css
 */
class CtaBand extends HTMLElement {
  static get observedAttributes() {
    return ['heading', 'sub', 'cta-label', 'cta-href'];
  }

  connectedCallback() {
    const heading = this.getAttribute('heading') || "Have a brief, an idea, or a half-formed sketch?";
    const sub = this.getAttribute('sub') || "I work with founders and product teams from kickoff to ship. Two-week sprints or full quarter engagements.";
    const ctaLabel = this.getAttribute('cta-label') || 'Start a conversation';
    const ctaHref = this.getAttribute('cta-href') || 'mailto:hello@bellechan.design';

    this.innerHTML = `
      <section class="cta-band" aria-labelledby="cta-band-title">
        <div class="cta-band__copy">
          <p class="cta-band__eyebrow">Let's build something</p>
          <h2 class="cta-band__title" id="cta-band-title"></h2>
          <p class="cta-band__sub"></p>
          <a class="btn btn--primary btn--lg cta-band__cta" href=""></a>
        </div>
        <div class="cta-band__art" aria-hidden="true">
          <span class="clay-blob clay-fill-pink     cta-band__art-a"></span>
          <span class="clay-blob clay-fill-ochre    cta-band__art-b"></span>
          <span class="clay-pill clay-fill-teal     cta-band__art-c"></span>
          <span class="clay-blob clay-fill-lavender cta-band__art-d"></span>
        </div>
      </section>
    `;

    this.querySelector('.cta-band__title').textContent = heading;
    this.querySelector('.cta-band__sub').textContent = sub;
    const cta = this.querySelector('.cta-band__cta');
    cta.textContent = ctaLabel;
    cta.setAttribute('href', ctaHref);
  }

  disconnectedCallback() {
    // No window/document listeners
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal === newVal || !this.isConnected) return;
    const map = {
      'heading': '.cta-band__title',
      'sub': '.cta-band__sub',
      'cta-label': '.cta-band__cta'
    };
    if (map[name]) {
      const el = this.querySelector(map[name]);
      if (el) el.textContent = newVal;
    }
    if (name === 'cta-href') {
      const cta = this.querySelector('.cta-band__cta');
      if (cta) cta.setAttribute('href', newVal);
    }
  }
}

customElements.define('app-cta-band', CtaBand);
