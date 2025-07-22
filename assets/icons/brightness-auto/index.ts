import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBrightnessAuto = createIconClass(templateHTML)
defineCustomElement('sinch-icon-brightness-auto', IconBrightnessAuto)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-brightness-auto': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-brightness-auto': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-brightness-auto': TSinchIconReact,
    }
  }
}
