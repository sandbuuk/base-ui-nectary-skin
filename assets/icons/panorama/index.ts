import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPanorama = createIconClass(templateHTML)
defineCustomElement('sinch-icon-panorama', IconPanorama)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-panorama': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-panorama': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-panorama': TSinchIconReact,
    }
  }
}
