import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export const LogoChatlayerIcon = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-chatlayer-icon', LogoChatlayerIcon)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-chatlayer-icon': {
      props: TSinchLogoProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-chatlayer-icon': TSinchLogoElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-chatlayer-icon': TSinchLogoReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-logo-chatlayer-icon': TSinchLogoReact,
    }
  }
}
