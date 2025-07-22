import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../types'

export const IconBrandedBellOff = createIconClass(templateHTML)
defineCustomElement('sinch-icon-branded-bell-off', IconBrandedBellOff)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-bell-off': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-bell-off': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-bell-off': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-branded-bell-off': TSinchIconBrandedReact,
    }
  }
}
