import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html?raw'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../types'

export * from '../types'

export const IconBrandedIntelligentRevenueMaximisation = createIconClass(templateHTML)
defineCustomElement('sinch-icon-branded-intelligent-revenue-maximisation', IconBrandedIntelligentRevenueMaximisation)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-intelligent-revenue-maximisation': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-intelligent-revenue-maximisation': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-intelligent-revenue-maximisation': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-branded-intelligent-revenue-maximisation': TSinchIconBrandedReact,
    }
  }
}
