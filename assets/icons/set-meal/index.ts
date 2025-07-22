import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSetMeal = createIconClass(templateHTML)
defineCustomElement('sinch-icon-set-meal', IconSetMeal)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-set-meal': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-set-meal': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-set-meal': TSinchIconReact,
    }
  }
}
