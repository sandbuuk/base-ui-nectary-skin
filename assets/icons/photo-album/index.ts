import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-photo-album', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-photo-album': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-photo-album': TSinchIconElement,
  }
}
