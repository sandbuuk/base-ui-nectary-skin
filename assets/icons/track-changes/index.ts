import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconTrackChanges = createIconClass(templateHTML)
defineCustomElement('sinch-icon-track-changes', IconTrackChanges)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-track-changes': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-track-changes': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-track-changes': TSinchIconReact,
    }
  }
}
