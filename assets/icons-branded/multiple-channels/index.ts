import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../types'

export const IconBrandedMultipleChannels = createIconClass(templateHTML)
defineCustomElement('sinch-icon-branded-multiple-channels', IconBrandedMultipleChannels)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-multiple-channels': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-multiple-channels': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-multiple-channels': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-branded-multiple-channels': TSinchIconBrandedReact,
    }
  }
}
