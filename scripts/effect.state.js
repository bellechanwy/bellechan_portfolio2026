"use strict";

/**
 * Module: effect.state.js
 * Type: Effect module
 * Purpose: Single application state. Only file allowed to hold state.
 *
 * Depends on: nothing
 * Used by: Web Components, effect modules
 * Side effects: Dispatches app:state-changed custom event on updates
 */

let state = Object.freeze({});

export const getState = () => state;

export const updateState = (reducerFn) => {
  state = Object.freeze(reducerFn(state));
  document.dispatchEvent(new CustomEvent('app:state-changed', {
    detail: state,
    bubbles: true
  }));
};
