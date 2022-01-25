import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact } from '../create-logo-class'

defineCustomElement('sinch-logo-sinch-icon', createLogoClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-sinch-icon': TSinchLogoReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-sinch-icon': TSinchLogoElement,
  }
}
