import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLightbulbOutline = createIconClass(templateHTML)
defineCustomElement('sinch-icon-lightbulb-outline', IconLightbulbOutline)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-lightbulb-outline': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-lightbulb-outline': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-lightbulb-outline': TSinchIconReact,
    }
  }
}
