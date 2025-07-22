import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconLaunch = createIconClass(templateHTML)
defineCustomElement('sinch-icon-launch', IconLaunch)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-launch': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-launch': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-launch': TSinchIconReact,
    }
  }
}
