import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconDesktopAccessDisabled = createIconClass(templateHTML)
defineCustomElement('sinch-icon-desktop-access-disabled', IconDesktopAccessDisabled)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-desktop-access-disabled': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-desktop-access-disabled': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-desktop-access-disabled': TSinchIconReact,
    }
  }
}
