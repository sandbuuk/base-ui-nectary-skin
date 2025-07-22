import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRssFeed = createIconClass(templateHTML)
defineCustomElement('sinch-icon-rss-feed', IconRssFeed)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-rss-feed': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-rss-feed': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-rss-feed': TSinchIconReact,
    }
  }
}
