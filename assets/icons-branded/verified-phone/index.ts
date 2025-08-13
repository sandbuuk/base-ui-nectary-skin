import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html?raw'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../types'

export * from '../types'

export const IconBrandedVerifiedPhone = createIconClass(templateHTML)
defineCustomElement('sinch-icon-branded-verified-phone', IconBrandedVerifiedPhone)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-verified-phone': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-verified-phone': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-verified-phone': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-branded-verified-phone': TSinchIconBrandedReact,
    }
  }
}
