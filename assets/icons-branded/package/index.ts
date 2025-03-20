import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../types'

defineCustomElement('sinch-icon-branded-package', createIconClass(templateHTML))

declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-package': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-package': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-package': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-package': TSinchIconBrandedReact,
    }
  }
}
