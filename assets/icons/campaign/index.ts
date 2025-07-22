import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconElement, TSinchIconReact } from '../types'

export const IconCampaign = createIconClass(templateHTML)
defineCustomElement('sinch-icon-campaign', IconCampaign)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-icon-campaign': TSinchIconElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-campaign': TSinchIconReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-campaign': TSinchIconReact,
    }
  }
}
