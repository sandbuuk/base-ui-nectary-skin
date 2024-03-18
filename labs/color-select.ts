import '@nectary/components/color-menu'
import '@nectary/components/color-menu-option'
import '@nectary/components/color-swatch'
import '@nectary/components/popover'
import '@nectary/components/select-button'
import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

const vibrantColorNames = [
  'violet',
  'blue',
  'green',
  'yellow',
  'orange',
  'red',
  'pink',
  'brown',
  'gray',
]

@customElement('sinch-color-select')
class ColorSelect extends LitElement {
  @property({ type: 'boolean' }) open = false
  @property() value = ''

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
        open=${this.open}
        aria-label="Select color"
        orientation="bottom-right"
        modal
        @close=${this.onClose}
      >
        <sinch-select-button
          slot="target"
          text=${this.value}
          placeholder="Select color"
          aria-label="Open color select"
          @click=${this.onOpen}
        >
          <sinch-color-swatch slot="icon" name="${this.value}" />
        </sinch-select-button>
        <sinch-color-menu
          slot="content"
          value=${this.value}
          aria-label="Color menu"
          @change=${this.onChange}
        >
          ${vibrantColorNames.map(
    (c) => html`<sinch-color-menu-option value=${c} />`
  )}
        </sinch-color-menu>
        </sinch-popover>
        </sinch-color-menu></sinch-popover>
    `
  }
}
