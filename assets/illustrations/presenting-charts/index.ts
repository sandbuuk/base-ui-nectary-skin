import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact, TSinchIllustrationProps } from '../types'

export const IllustrationPresentingCharts = createIllustrationClass(templateHTML)
defineCustomElement('sinch-illustration-presenting-charts', IllustrationPresentingCharts)

declare global {
  interface NectaryComponentMap {
    'sinch-illustration-presenting-charts': {
      props: TSinchIllustrationProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-presenting-charts': TSinchIllustrationElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-presenting-charts': TSinchIllustrationReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-illustration-presenting-charts': TSinchIllustrationReact,
    }
  }
}
