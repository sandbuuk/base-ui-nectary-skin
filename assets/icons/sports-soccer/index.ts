import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSportsSoccer = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sports-soccer', IconSportsSoccer)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sports-soccer': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sports-soccer': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sports-soccer': TSinchIconReact,
    }
  }
}
