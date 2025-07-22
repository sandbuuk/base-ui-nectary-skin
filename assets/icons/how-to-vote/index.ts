import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconHowToVote = createIconClass(templateHTML)
defineCustomElement('sinch-icon-how-to-vote', IconHowToVote)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-how-to-vote': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-how-to-vote': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-how-to-vote': TSinchIconReact,
    }
  }
}
