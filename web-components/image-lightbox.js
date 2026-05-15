"use strict";

/**
 * <app-image-lightbox>
 *
 * Page-level image viewer. Mount this once per page, and any element
 * with a [data-lightbox-src] attribute (anywhere on the page) will
 * open it. Uses the native <dialog> element so we get focus trapping,
 * ESC-to-close, and an accessible backdrop for free.
 *
 * Trigger contract:
 *   <button type="button"
 *           data-lightbox-src="/path/to/full-image.png"
 *           data-lightbox-alt="Description of the image">
 *     ...
 *   </button>
 *
 * Attributes: none
 * Events dispatched: none
 * Expected children: none
 * CSS: styles/organisms/image-lightbox.css
 */
class ImageLightbox extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <dialog class="image-lightbox" aria-label="Image viewer">
        <div class="image-lightbox__inner">
          <button type="button" class="image-lightbox__close" aria-label="Close image viewer">×</button>
          <img class="image-lightbox__img" src="" alt="">
        </div>
      </dialog>
    `;

    this.dialog = this.querySelector('.image-lightbox');
    this.image = this.querySelector('.image-lightbox__img');
    this.closeBtn = this.querySelector('.image-lightbox__close');

    this.handleTriggerClick = this.handleTriggerClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleBackdropClick = this.handleBackdropClick.bind(this);

    document.addEventListener('click', this.handleTriggerClick);
    this.closeBtn.addEventListener('click', this.handleClose);
    this.dialog.addEventListener('click', this.handleBackdropClick);
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.handleTriggerClick);
  }

  handleTriggerClick(event) {
    const trigger = event.target.closest('[data-lightbox-src]');
    if (!trigger) return;

    event.preventDefault();
    this.image.src = trigger.dataset.lightboxSrc;
    this.image.alt = trigger.dataset.lightboxAlt || '';

    if (typeof this.dialog.showModal === 'function') {
      this.dialog.showModal();
    } else {
      this.dialog.setAttribute('open', '');
    }
  }

  handleClose() {
    this.dialog.close();
    this.image.removeAttribute('src');
  }

  handleBackdropClick(event) {
    if (event.target === this.dialog) {
      this.handleClose();
    }
  }
}

customElements.define('app-image-lightbox', ImageLightbox);
