import { defineCustomElement } from '../../utils'
import { createLogoClass } from '../create-logo-class'
import templateHTML from './template.html'
import type { TSinchLogoElement, TSinchLogoReact, TSinchLogoProps } from '../types'

export const LogoMailjetIcon = createLogoClass(templateHTML)
defineCustomElement('sinch-logo-mailjet-icon', LogoMailjetIcon)

declare global {
  interface NectaryComponentMap {
    'sinch-logo-mailjet-icon': {
      props: TSinchLogoProps,
    },
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-logo-mailjet-icon': TSinchLogoReact & {
        colored?: boolean,
      },
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-logo-mailjet-icon': TSinchLogoElement & {
      colored?: boolean,
    },
  }
}
