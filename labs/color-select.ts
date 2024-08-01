import { ScopedRegistryHost } from '@lit-labs/scoped-registry-mixin'
import '@nectary/components/color-menu'
import '@nectary/components/color-menu-option'
import '@nectary/components/color-swatch'
import '@nectary/components/popover'
import '@nectary/components/select-button'
import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { defineCustomElement } from './utils'

@customElement('sinch-color-select')
export class ColorSelect extends LitElement {
  @property({ type: 'boolean' })
   accessor open = false

  @property()
   accessor value = ''

  onClose() {
    this.open = false
  }

  onOpen() {
    this.open = true
  }

  onChange(e: CustomEvent<string>) {
    this.value = e.detail
  }

  render() {
    return html`
      <sinch-popover
        ?open=${this.open}
        aria-label="Select color"
        orientation="bottom-right"
        modal
        @-close=${this.onClose}
      >
        <sinch-select-button
          slot="target"
          text=${this.value}
          placeholder="Select color"
          aria-label="Open color select"
          @-click=${this.onOpen}
        >
          <sinch-color-swatch slot="icon" name="${this.value}" />
        </sinch-select-button>
        <sinch-color-menu
          slot="content"
          value=${this.value}
          aria-label="Color menu"
          @-change=${this.onChange}
        >
          <sinch-color-menu-option value="violet" />
        </sinch-color-menu>
        </sinch-popover>
        </sinch-color-menu></sinch-popover>
    `
  }
}

export class ScopedColorSelect extends ScopedRegistryHost(LitElement) {
  // Elements here will be registered against the tag names provided only
  // in the shadow root for this element
  static elementDefinitions = {
    'sinch-color-select': ColorSelect,
  }

  render() {
    return html`<sinch-color-select></sinch-color-select>`
  }
}

defineCustomElement('sinch-labs-color-select', ScopedColorSelect)

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-labs-color-select': {},
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-labs-color-select': {},
  }
}
