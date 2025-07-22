import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconPictureInPictureAlt = createIconClass(templateHTML)
defineCustomElement('sinch-icon-picture-in-picture-alt', IconPictureInPictureAlt)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-picture-in-picture-alt': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-picture-in-picture-alt': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-picture-in-picture-alt': TSinchIconReact,
    }
  }
}
