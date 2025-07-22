import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCropPortrait = createIconClass(templateHTML)
defineCustomElement('sinch-icon-crop-portrait', IconCropPortrait)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-crop-portrait': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-crop-portrait': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-crop-portrait': TSinchIconReact,
    }
  }
}
