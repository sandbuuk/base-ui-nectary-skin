import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconChannelElement, TSinchIconChannelReact } from '../types'

defineCustomElement('sinch-icon-channel-instagram', createIconClass(templateHTML))

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-channel-instagram': TSinchIconChannelElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-instagram': TSinchIconChannelReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-instagram': TSinchIconChannelReact,
    }
  }
}
