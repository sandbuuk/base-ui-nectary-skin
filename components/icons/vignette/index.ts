import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-vignette', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-vignette': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-vignette': TSinchIconElement,
  }
}
