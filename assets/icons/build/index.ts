import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBuild = createIconClass(templateHTML)
defineCustomElement('sinch-icon-build', IconBuild)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-build': TSinchIconElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-build': TSinchIconReact,
    }
  }
}
