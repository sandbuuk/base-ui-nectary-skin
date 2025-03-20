import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconChannelElement, TSinchIconChannelReact, TSinchIconChannelProps } from '../types'

defineCustomElement('sinch-icon-channel-notify', createIconClass(templateHTML))

declare global {
  interface NectaryComponentMap {
    'sinch-icon-channel-notify': {
      props: TSinchIconChannelProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-channel-notify': TSinchIconChannelElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-notify': TSinchIconChannelReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-notify': TSinchIconChannelReact,
    }
  }
}
