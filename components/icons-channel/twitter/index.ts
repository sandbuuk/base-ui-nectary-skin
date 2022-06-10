import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconChannelElement, TSinchIconChannelReact } from '../types'

defineCustomElement('sinch-icon-channel-twitter', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-twitter': TSinchIconChannelReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-channel-twitter': TSinchIconChannelElement,
  }
}
