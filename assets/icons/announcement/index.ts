import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAnnouncement = createIconClass(templateHTML)
defineCustomElement('sinch-icon-announcement', IconAnnouncement)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-announcement': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-announcement': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-announcement': TSinchIconReact,
    }
  }
}
