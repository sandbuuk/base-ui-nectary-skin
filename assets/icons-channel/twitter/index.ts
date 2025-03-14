import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconChannelElement, TSinchIconChannelReact } from '../types'

defineCustomElement('sinch-icon-channel-twitter', createIconClass(templateHTML))

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-channel-twitter': TSinchIconChannelElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-twitter': TSinchIconChannelReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-twitter': TSinchIconChannelReact,
    }
  }
}
