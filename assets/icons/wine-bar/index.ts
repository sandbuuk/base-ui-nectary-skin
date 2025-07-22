import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconWineBar = createIconClass(templateHTML)
defineCustomElement('sinch-icon-wine-bar', IconWineBar)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-wine-bar': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-wine-bar': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-wine-bar': TSinchIconReact,
    }
  }
}
