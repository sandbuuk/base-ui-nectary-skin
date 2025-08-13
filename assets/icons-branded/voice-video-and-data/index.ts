import { defineCustomElement } from '../../utils/element'
import { createIconClass } from '../create-icon-class'
import templateHTML from './template.html?raw'
import type { TSinchIconBrandedElement, TSinchIconBrandedReact, TSinchIconBrandedProps } from '../types'

export * from '../types'

export const IconBrandedVoiceVideoAndData = createIconClass(templateHTML)
defineCustomElement('sinch-icon-branded-voice-video-and-data', IconBrandedVoiceVideoAndData)

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
    interface IntrinsicElements extends globalThis.JSX.IntrinsicElements {
      'sinch-icon-branded-voice-video-and-data': TSinchIconBrandedReact,
    }
  }
}
