import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconRoomPreferences = createIconClass(templateHTML)
defineCustomElement('sinch-icon-room-preferences', IconRoomPreferences)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-room-preferences': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-room-preferences': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-room-preferences': TSinchIconReact,
    }
  }
}
