import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

defineCustomElement('sinch-logo-portal-engage-icon', createLogoClass(templateHTML))

declare global {
  interface NectaryComponentMap {
    'sinch-logo-portal-engage-icon': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-portal-engage-icon': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-portal-engage-icon': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}
