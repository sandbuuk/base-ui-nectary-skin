import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

defineCustomElement('sinch-illustration-walking-on-phone', createIllustrationClass(templateHTML))

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-walking-on-phone': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-walking-on-phone': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-walking-on-phone': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-walking-on-phone': TSinchIllustrationReact,
    }
  }
}
