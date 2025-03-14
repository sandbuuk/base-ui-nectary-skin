import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconChannelElement, TSinchIconChannelReact } from '../types'

defineCustomElement('sinch-icon-channel-notify-square', createIconClass(templateHTML))

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-channel-notify-square': TSinchIconChannelElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-notify-square': TSinchIconChannelReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-notify-square': TSinchIconChannelReact,
    }
  }
}
