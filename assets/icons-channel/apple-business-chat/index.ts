import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html?raw'
import type { TSinchIconChannelElement, TSinchIconChannelReact, TSinchIconChannelProps } from '../types'

export * from '../types'

export const IconChannelAppleBusinessChat = createIconClass(templateHTML)
defineCustomElement('sinch-icon-channel-apple-business-chat', IconChannelAppleBusinessChat)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-channel-apple-business-chat': {
      props: TSinchIconChannelProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-channel-apple-business-chat': TSinchIconChannelElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-apple-business-chat': TSinchIconChannelReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-channel-apple-business-chat': TSinchIconChannelReact,
    }
  }
}
