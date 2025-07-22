import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSyncAlt = createIconClass(templateHTML)
defineCustomElement('sinch-icon-sync-alt', IconSyncAlt)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-sync-alt': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-sync-alt': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-sync-alt': TSinchIconReact,
    }
  }
}
