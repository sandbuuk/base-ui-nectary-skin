import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html?raw'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../types'

export * from '../types'

export const IconBrandedMassage = createIconClass(templateHTML)
defineCustomElement('sinch-icon-branded-massage', IconBrandedMassage)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-massage': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-massage': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-massage': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-branded-massage': TSinchIconBrandedReact,
    }
  }
}
