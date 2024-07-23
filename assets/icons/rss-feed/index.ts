import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

defineCustomElement('sinch-icon-rss-feed', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-rss-feed': TSinchIconReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-rss-feed': TSinchIconElement,
  }
}
