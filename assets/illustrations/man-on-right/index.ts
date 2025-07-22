import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export const IllustrationManOnRight = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-man-on-right', IllustrationManOnRight)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-man-on-right': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-man-on-right': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-man-on-right': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-man-on-right': TSinchIllustrationReact,
    }
  }
}
