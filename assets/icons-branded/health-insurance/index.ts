import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html?raw'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../types'

export * from '../types'

export const IconBrandedHealthInsurance = createIconClass(templateHTML)
defineCustomElement('sinch-icon-branded-health-insurance', IconBrandedHealthInsurance)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-health-insurance': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-health-insurance': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-health-insurance': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-branded-health-insurance': TSinchIconBrandedReact,
    }
  }
}
