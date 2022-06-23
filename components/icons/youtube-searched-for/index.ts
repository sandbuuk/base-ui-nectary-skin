import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-youtube-searched-for', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-youtube-searched-for': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-youtube-searched-for': TSinchIconElement,
  }
}
