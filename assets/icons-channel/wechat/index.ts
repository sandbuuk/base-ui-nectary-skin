import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html?raw'
import type { TSinchIconChannelElement, TSinchIconChannelReact, TSinchIconChannelProps } from '../types'

export * from '../types'

export const IconChannelWechat = createIconClass(templateHTML)
defineCustomElement('sinch-icon-channel-wechat', IconChannelWechat)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-channel-wechat': {
      props: TSinchIconChannelProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-channel-wechat': TSinchIconChannelElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-wechat': TSinchIconChannelReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-channel-wechat': TSinchIconChannelReact,
    }
  }
}
