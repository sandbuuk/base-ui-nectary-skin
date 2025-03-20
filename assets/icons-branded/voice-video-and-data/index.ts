import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../types'

defineCustomElement('sinch-icon-branded-voice-video-and-data', createIconClass(templateHTML))

declare global {
  interface NectaryComponentMap {
    'sinch-icon-branded-voice-video-and-data': {
      props: TSinchIconBrandedProps,
    },
  }

  interface HTMLElementTagNameMap {
    'sinch-icon-branded-voice-video-and-data': TSinchIconBrandedElement,
  }

  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-voice-video-and-data': TSinchIconBrandedReact,
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-icon-branded-voice-video-and-data': TSinchIconBrandedReact,
    }
  }
}
