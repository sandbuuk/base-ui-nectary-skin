import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconWbSunny = createIconClass(templateHTML)
defineCustomElement('sinch-icon-wb-sunny', IconWbSunny)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-wb-sunny': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-wb-sunny': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-wb-sunny': TSinchIconReact,
    }
  }
}
