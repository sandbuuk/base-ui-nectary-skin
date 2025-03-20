import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconChannelElement, TSinchIconChannelReact, TSinchIconChannelProps } from '../types'

defineCustomElement('sinch-icon-channel-twitter', createIconClass(templateHTML))

declare global {
  interface NectaryComponentMap {
    'sinch-icon-channel-twitter': {
      props: TSinchIconChannelProps,
    },
  }

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
