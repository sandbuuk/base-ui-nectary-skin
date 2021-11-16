import { defineCustomElement } from '../../utils'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIcon } from '../create-icon-class'

defineCustomElement('sinch-icon-tooltip', createIconClass(templateHTML))

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-tooltip': TSinchIcon,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-tooltip': HTMLElement & TSinchIcon,
  }
}
