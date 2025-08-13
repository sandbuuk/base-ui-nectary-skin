import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html?raw'
import type { TSinchIconChannelElement, TSinchIconChannelReact, TSinchIconChannelProps } from '../types'

export * from '../types'

export const IconChannelFacebook = createIconClass(templateHTML)
defineCustomElement('sinch-icon-channel-facebook', IconChannelFacebook)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-channel-facebook': {
      props: TSinchIconChannelProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-channel-facebook': TSinchIconChannelElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-channel-facebook': TSinchIconChannelReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-channel-facebook': TSinchIconChannelReact,
    }
  }
}
