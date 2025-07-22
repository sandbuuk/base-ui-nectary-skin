import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconAssistantPhoto = createIconClass(templateHTML)
defineCustomElement('sinch-icon-assistant-photo', IconAssistantPhoto)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-assistant-photo': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-assistant-photo': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-assistant-photo': TSinchIconReact,
    }
  }
}
