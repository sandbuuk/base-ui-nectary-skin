import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../types'

export const IconBrandedThumbsDown = createIconClass(templateHTML)
defineCustomElement('sinch-icon-branded-thumbs-down', IconBrandedThumbsDown)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-thumbs-down': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-thumbs-down': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-thumbs-down': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-branded-thumbs-down': TSinchIconBrandedReact,
    }
  }
}
