import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPanoramaVertical = createIconClass(templateHTML)
defineCustomElement('sinch-icon-panorama-vertical', IconPanoramaVertical)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-panorama-vertical': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-panorama-vertical': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-panorama-vertical': TSinchIconReact,
    }
  }
}
