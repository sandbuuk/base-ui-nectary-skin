import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact } from '../types'

defineCustomElement('sinch-logo-campaigns-icon', createLogoClass(templateHTML))

declare global {
  interface HTMLElementTagNameMap {
    'sinch-logo-campaigns-icon': TSinchLogoElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-campaigns-icon': TSinchLogoReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-campaigns-icon': TSinchLogoReact,
    }
  }
}
