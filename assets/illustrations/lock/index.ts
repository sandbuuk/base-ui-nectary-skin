import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact } from '../types'

defineCustomElement('sinch-illustration-lock', createIllustrationClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-lock': TSinchIllustrationReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-lock': TSinchIllustrationElement,
  }
}
