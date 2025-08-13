import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html?raw'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../types'

export * from '../types'

export const IconBrandedCustomerSatisfactionSmiley = createIconClass(templateHTML)
defineCustomElement('sinch-icon-branded-customer-satisfaction-smiley', IconBrandedCustomerSatisfactionSmiley)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-customer-satisfaction-smiley': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-customer-satisfaction-smiley': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-customer-satisfaction-smiley': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-branded-customer-satisfaction-smiley': TSinchIconBrandedReact,
    }
  }
}
