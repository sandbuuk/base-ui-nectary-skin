import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconMeetingRoom = createIconClass(templateHTML)
defineCustomElement('sinch-icon-meeting-room', IconMeetingRoom)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-meeting-room': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-meeting-room': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-meeting-room': TSinchIconReact,
    }
  }
}
