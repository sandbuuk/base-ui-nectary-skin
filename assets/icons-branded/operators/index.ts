import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html?raw'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../types'

export * from '../types'

export const IconBrandedOperators = createIconClass(templateHTML)
defineCustomElement('sinch-icon-branded-operators', IconBrandedOperators)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-operators': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-operators': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-operators': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-branded-operators': TSinchIconBrandedReact,
    }
  }
}
