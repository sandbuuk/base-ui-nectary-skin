import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html?raw'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../types'

export * from '../types'

export const IconBrandedCallAndVerified = createIconClass(templateHTML)
defineCustomElement('sinch-icon-branded-call-and-verified', IconBrandedCallAndVerified)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-call-and-verified': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-call-and-verified': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-call-and-verified': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-branded-call-and-verified': TSinchIconBrandedReact,
    }
  }
}
