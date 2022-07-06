import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-motion-photos-pause', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-motion-photos-pause': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-motion-photos-pause': TSinchIconElement,
  }
}
