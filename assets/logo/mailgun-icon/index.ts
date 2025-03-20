import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

defineCustomElement('sinch-logo-mailgun-icon', createLogoClass(templateHTML))

declare global {
  interface NectaryComponentMap {
    'sinch-logo-mailgun-icon': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-mailgun-icon': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-mailgun-icon': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}
