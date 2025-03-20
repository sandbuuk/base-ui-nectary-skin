import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconChannelElement, TSinchIconChannelReact, TSinchIconChannelProps } from '../types'

defineCustomElement('sinch-icon-channel-wechat-square', createIconClass(templateHTML))

declare global {
  interface NectaryComponentMap {
    'sinch-icon-channel-wechat-square': {
      props: TSinchIconChannelProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-channel-wechat-square': TSinchIconChannelElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-wechat-square': TSinchIconChannelReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-wechat-square': TSinchIconChannelReact,
    }
  }
}
