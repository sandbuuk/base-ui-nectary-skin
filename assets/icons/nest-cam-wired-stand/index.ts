import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconNestCamWiredStand = createIconClass(templateHTML)
defineCustomElement('sinch-icon-nest-cam-wired-stand', IconNestCamWiredStand)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-nest-cam-wired-stand': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-nest-cam-wired-stand': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-nest-cam-wired-stand': TSinchIconReact,
    }
  }
}
