import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPanoramaFishEye = createIconClass(templateHTML)
defineCustomElement('sinch-icon-panorama-fish-eye', IconPanoramaFishEye)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-panorama-fish-eye': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-panorama-fish-eye': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-panorama-fish-eye': TSinchIconReact,
    }
  }
}
