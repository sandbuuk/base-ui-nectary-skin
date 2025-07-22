import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export const IllustrationMessagesOnYellowBg = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-messages-on-yellow-bg', IllustrationMessagesOnYellowBg)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-messages-on-yellow-bg': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-messages-on-yellow-bg': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-messages-on-yellow-bg': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-messages-on-yellow-bg': TSinchIllustrationReact,
    }
  }
}
