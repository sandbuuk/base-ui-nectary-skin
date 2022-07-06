import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-music-note', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-music-note': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-music-note': TSinchIconElement,
  }
}
