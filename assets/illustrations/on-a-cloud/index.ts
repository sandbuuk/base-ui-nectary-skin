import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export const IllustrationOnACloud = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-on-a-cloud', IllustrationOnACloud)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-on-a-cloud': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-on-a-cloud': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-on-a-cloud': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-on-a-cloud': TSinchIllustrationReact,
    }
  }
}
