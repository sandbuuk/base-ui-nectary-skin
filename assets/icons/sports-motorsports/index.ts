import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSportsMotorsports = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sports-motorsports', IconSportsMotorsports)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sports-motorsports': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sports-motorsports': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sports-motorsports': TSinchIconReact,
    }
  }
}
