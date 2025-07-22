import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconBrandingWatermark = createIconClass(templateHTML)
defineCustomElement('sinch-icon-branding-watermark', IconBrandingWatermark)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-branding-watermark': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branding-watermark': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-branding-watermark': TSinchIconReact,
    }
  }
}
