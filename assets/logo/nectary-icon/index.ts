import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

defineCustomElement('sinch-logo-nectary-icon', createLogoClass(templateHTML))

declare global {
  interface NectaryComponentMap {
    'sinch-logo-nectary-icon': {
      props: TSinchLogoProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-nectary-icon': TSinchLogoElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-nectary-icon': TSinchLogoReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-nectary-icon': TSinchLogoReact,
    }
  }
}
