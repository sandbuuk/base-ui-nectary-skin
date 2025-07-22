import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconFollowTheSigns = createIconClass(templateHTML)
defineCustomElement('sinch-icon-follow-the-signs', IconFollowTheSigns)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-follow-the-signs': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-follow-the-signs': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-follow-the-signs': TSinchIconReact,
    }
  }
}
