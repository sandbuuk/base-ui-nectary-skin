import { defineCustomElement } from '../../utils/element'
import { createIllustrationClass } from '../create-illustration-class'
import templateHTML from './template.html'
import type { TSinchIllustrationElement, TSinchIllustrationReact } from '../types'

defineCustomElement('sinch-illustration-office-worker', createIllustrationClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-illustration-office-worker': TSinchIllustrationReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-illustration-office-worker': TSinchIllustrationElement,
  }
}
