import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html?raw'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export * from '../types'

export const IllustrationGeometricShapesPassing = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-geometric-shapes-passing', IllustrationGeometricShapesPassing)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-geometric-shapes-passing': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-geometric-shapes-passing': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-geometric-shapes-passing': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-geometric-shapes-passing': TSinchIllustrationReact,
    }
  }
}
