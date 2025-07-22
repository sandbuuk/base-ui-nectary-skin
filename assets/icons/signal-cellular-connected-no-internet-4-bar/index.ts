import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconSignalCellularConnectedNoInternet4Bar = createIconClass(templateHTML)
defineCustomElement('sinch-icon-signal-cellular-connected-no-internet-4-bar', IconSignalCellularConnectedNoInternet4Bar)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-signal-cellular-connected-no-internet-4-bar': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-signal-cellular-connected-no-internet-4-bar': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-signal-cellular-connected-no-internet-4-bar': TSinchIconReact,
    }
  }
}
