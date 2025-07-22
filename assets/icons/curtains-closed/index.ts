import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCurtainsClosed = createIconClass(templateHTML)
defineCustomElement('sinch-icon-curtains-closed', IconCurtainsClosed)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-curtains-closed': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-curtains-closed': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-curtains-closed': TSinchIconReact,
    }
  }
}
