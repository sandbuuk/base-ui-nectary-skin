import '../icon'
import '../text'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  isAttrEqual,
  isAttrTrue,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  updateExplicitBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import {
  ATTR_PROGRESS_STEPPER_ITEM_ACTIVE_DESCENDANT,
  ATTR_PROGRESS_STEPPER_ITEM_CHECKED,
  ATTR_PROGRESS_STEPPER_ITEM_STATUS,
  isProgressStepperItemActive,
  isProgressStepperItemActiveDescendant,
} from './utils'
import type {
  TSinchProgressStepperItemElement,
  TSinchProgressStepperItemReact,
} from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement(
  'sinch-progress-stepper-item',
  class extends NectaryElement {
    #$text: HTMLElement

    constructor() {
      super()

      const shadowRoot = this.attachShadow({ delegatesFocus: false })

      shadowRoot.appendChild(template.content.cloneNode(true))

      this.#$text = shadowRoot.querySelector('#text')!
    }

    connectedCallback() {
      this.setAttribute('role', 'tab')
    }

    disconnectedCallback() {}

    static get observedAttributes() {
      return [
        'text',
        'invalid',
        ATTR_PROGRESS_STEPPER_ITEM_STATUS,
        ATTR_PROGRESS_STEPPER_ITEM_CHECKED,
        ATTR_PROGRESS_STEPPER_ITEM_ACTIVE_DESCENDANT,
      ]
    }

    attributeChangedCallback(
      name: string,
      oldVal: string | null,
      newVal: string | null
    ) {
      switch (name) {
        case 'text': {
          this.#$text.textContent = newVal

          break
        }
        case ATTR_PROGRESS_STEPPER_ITEM_CHECKED: {
          updateExplicitBooleanAttribute(
            this,
            'aria-selected',
            isAttrTrue(newVal)
          )

          break
        }
        case ATTR_PROGRESS_STEPPER_ITEM_STATUS: {
          this.#updateTabIndex()

          break
        }
        case ATTR_PROGRESS_STEPPER_ITEM_ACTIVE_DESCENDANT: {
          this.#updateTabIndex()

          break
        }
        case 'invalid': {
          if (isAttrEqual(oldVal, newVal)) {
            return
          }

          const isInvalid = isAttrTrue(newVal)

          updateExplicitBooleanAttribute(this, 'aria-invalid', isInvalid)
          updateBooleanAttribute(this, 'invalid', isInvalid)

          break
        }
      }
    }

    set value(value: string) {
      updateAttribute(this, 'value', value)
    }

    get value() {
      return getAttribute(this, 'value', '')
    }

    set text(value: string) {
      updateAttribute(this, 'text', value)
    }

    get text() {
      return getAttribute(this, 'text', '')
    }

    set invalid(isInvalid: boolean) {
      updateBooleanAttribute(this, 'invalid', isInvalid)
    }

    get invalid() {
      return getBooleanAttribute(this, 'invalid')
    }

    get focusable() {
      return true
    }

    #updateTabIndex() {
      this.tabIndex =
        isProgressStepperItemActiveDescendant(this) &&
        isProgressStepperItemActive(this)
          ? 0
          : -1
    }
  }
)

declare global {
  interface HTMLElementTagNameMap {
    'sinch-progress-stepper-item': TSinchProgressStepperItemElement,
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-progress-stepper-item': TSinchProgressStepperItemReact,
    }
  }
}
