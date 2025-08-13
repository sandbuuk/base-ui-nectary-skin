import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html?raw'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export * from '../types'

export const IllustrationSittingMessaging = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-sitting-messaging', IllustrationSittingMessaging)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-sitting-messaging': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-sitting-messaging': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-sitting-messaging': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-sitting-messaging': TSinchIllustrationReact,
    }
  }
}
