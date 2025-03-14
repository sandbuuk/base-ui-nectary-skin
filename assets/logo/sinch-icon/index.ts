import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact } from '../types'

defineCustomElement('sinch-logo-sinch-icon', createLogoClass(templateHTML))

declare global {
  interface HTMLElementTagNameMap {
    'sinch-logo-sinch-icon': TSinchLogoElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-sinch-icon': TSinchLogoReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-sinch-icon': TSinchLogoReact,
    }
  }
}
