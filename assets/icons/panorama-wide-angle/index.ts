import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPanoramaWideAngle = createIconClass(templateHTML)
defineCustomElement('sinch-icon-panorama-wide-angle', IconPanoramaWideAngle)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-panorama-wide-angle': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-panorama-wide-angle': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-panorama-wide-angle': TSinchIconReact,
    }
  }
}
