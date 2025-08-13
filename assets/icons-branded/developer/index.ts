import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html?raw'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../types'

export * from '../types'

export const IconBrandedDeveloper = createIconClass(templateHTML)
defineCustomElement('sinch-icon-branded-developer', IconBrandedDeveloper)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-developer': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-developer': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-developer': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-branded-developer': TSinchIconBrandedReact,
    }
  }
}
