import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-videogame-asset', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-videogame-asset': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-videogame-asset': TSinchIconElement,
  }
}
