import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

defineCustomElement('sinch-illustration-delivery-service-package', createIllustrationClass(templateHTML))

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
    interface IntrinsicElements {
      'sinch-illustration-delivery-service-package': TSinchIllustrationReact,
    }
  }
}
