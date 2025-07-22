import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPanoramaHorizontal = createIconClass(templateHTML)
defineCustomElement('sinch-icon-panorama-horizontal', IconPanoramaHorizontal)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-panorama-horizontal': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-panorama-horizontal': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-panorama-horizontal': TSinchIconReact,
    }
  }
}
