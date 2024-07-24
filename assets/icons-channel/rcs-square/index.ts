import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconChannelElement, TSinchIconChannelReact } from '../types'

defineCustomElement('sinch-icon-channel-rcs-square', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-rcs-square': TSinchIconChannelReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-channel-rcs-square': TSinchIconChannelElement,
  }
}
