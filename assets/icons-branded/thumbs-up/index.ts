import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html?raw'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../types'

export * from '../types'

export const IconBrandedThumbsUp = createIconClass(templateHTML)
defineCustomElement('sinch-icon-branded-thumbs-up', IconBrandedThumbsUp)

declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-thumbs-up': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-thumbs-up': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-thumbs-up': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-branded-thumbs-up': TSinchIconBrandedReact,
    }
  }
}
