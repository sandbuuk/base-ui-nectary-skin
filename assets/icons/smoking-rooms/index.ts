import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSmokingRooms = createIconClass(templateHTML)
defineCustomElement('sinch-icon-smoking-rooms', IconSmokingRooms)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-smoking-rooms': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-smoking-rooms': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-smoking-rooms': TSinchIconReact,
    }
  }
}
