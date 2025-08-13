import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html?raw'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../types'

export * from '../types'

export const IconBrandedOfficeActivities = createIconClass(templateHTML)
defineCustomElement('sinch-icon-branded-office-activities', IconBrandedOfficeActivities)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-office-activities': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-office-activities': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-office-activities': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-branded-office-activities': TSinchIconBrandedReact,
    }
  }
}
