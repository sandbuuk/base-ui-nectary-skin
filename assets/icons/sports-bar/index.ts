import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSportsBar = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sports-bar', IconSportsBar)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sports-bar': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sports-bar': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sports-bar': TSinchIconReact,
    }
  }
}
