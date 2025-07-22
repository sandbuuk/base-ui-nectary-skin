import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSwitchVideo = createIconClass(templateHTML)
defineCustomElement('sinch-icon-switch-video', IconSwitchVideo)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-switch-video': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-switch-video': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-switch-video': TSinchIconReact,
    }
  }
}
