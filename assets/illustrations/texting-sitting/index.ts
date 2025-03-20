import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

defineCustomElement('sinch-illustration-texting-sitting', createIllustrationClass(templateHTML))

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-texting-sitting': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-texting-sitting': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-texting-sitting': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-texting-sitting': TSinchIllustrationReact,
    }
  }
}
