import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTune = createIconClass(templateHTML)
defineCustomElement('sinch-icon-tune', IconTune)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-tune': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-tune': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-tune': TSinchIconReact,
    }
  }
}
