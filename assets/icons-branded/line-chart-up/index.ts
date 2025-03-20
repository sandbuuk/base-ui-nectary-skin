import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../types'

defineCustomElement('sinch-icon-branded-line-chart-up', createIconClass(templateHTML))

declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-line-chart-up': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-line-chart-up': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-line-chart-up': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-line-chart-up': TSinchIconBrandedReact,
    }
  }
}
