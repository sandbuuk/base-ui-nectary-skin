import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html?raw'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export * from '../types'

export const IllustrationSupportingDevice3 = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-supporting-device-3', IllustrationSupportingDevice3)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-supporting-device-3': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-supporting-device-3': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-supporting-device-3': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-supporting-device-3': TSinchIllustrationReact,
    }
  }
}
