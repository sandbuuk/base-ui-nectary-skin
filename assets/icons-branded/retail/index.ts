import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html?raw'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../types'

export * from '../types'

export const IconBrandedRetail = createIconClass(templateHTML)
defineCustomElement('sinch-icon-branded-retail', IconBrandedRetail)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-retail': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-retail': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-retail': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-branded-retail': TSinchIconBrandedReact,
    }
  }
}
