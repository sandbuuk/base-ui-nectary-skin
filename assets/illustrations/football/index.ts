import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html?raw'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export * from '../types'

export const IllustrationFootball = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-football', IllustrationFootball)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-football': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-football': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-football': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-football': TSinchIllustrationReact,
    }
  }
}
