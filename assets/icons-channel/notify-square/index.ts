import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconChannelElement, TSinchIconChannelReact, TSinchIconChannelProps } from '../types'

defineCustomElement('sinch-icon-channel-notify-square', createIconClass(templateHTML))

declare global {
  interface NectaryComponentMap {
    'sinch-icon-channel-notify-square': {
      props: TSinchIconChannelProps,
    },
  }

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
