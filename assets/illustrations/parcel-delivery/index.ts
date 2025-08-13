import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html?raw'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export * from '../types'

export const IllustrationParcelDelivery = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-parcel-delivery', IllustrationParcelDelivery)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-parcel-delivery': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-parcel-delivery': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-parcel-delivery': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-parcel-delivery': TSinchIllustrationReact,
    }
  }
}
