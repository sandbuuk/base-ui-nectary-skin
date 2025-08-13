import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html?raw'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export * from '../types'

export const IllustrationDeliveryServicePackage = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-delivery-service-package', IllustrationDeliveryServicePackage)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-delivery-service-package': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-delivery-service-package': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-delivery-service-package': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-delivery-service-package': TSinchIllustrationReact,
    }
  }
}
