import { defineCustomElement, getEventHandler } from '../utils'
import templateHTML from './template.html'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-select', class extends HTMLElement {
  $button: HTMLButtonElement
  $label: HTMLLabelElement
  $optionalText: HTMLSpanElement
  $additionalText: HTMLSpanElement
  $invalidText: HTMLSpanElement
  $selectSlot: HTMLSlotElement
  $listbox: HTMLUListElement
  prevKeyboardFocusId = ''

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ mode: 'closed' })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.$button = shadowRoot.querySelector('#button')!
    this.$listbox = shadowRoot.querySelector('#listbox')!
    this.$label = shadowRoot.querySelector('#label')!
    this.$optionalText = shadowRoot.querySelector('#optional')!
    this.$additionalText = shadowRoot.querySelector('#additional')!
    this.$invalidText = shadowRoot.querySelector('#invalid')!
    this.$selectSlot = shadowRoot.querySelector('slot[name="select"]')!
  }

  connectedCallback() {
    this.$button.addEventListener('click', this.onButtonClick)
    this.$listbox.addEventListener('blur', this.onOutside, true)
    this.$listbox.addEventListener('click', this.onListboxClick, true)
    this.$selectSlot.addEventListener('slotchange', this.onSlotChange)
  }

  disconnectedCallback() {
    this.$button.removeEventListener('click', this.onButtonClick)
    this.$listbox.removeEventListener('blur', this.onOutside, true)
    this.$listbox.removeEventListener('click', this.onListboxClick)
    this.$selectSlot.removeEventListener('slotchange', this.onSlotChange)
  }

  static get observedAttributes() {
    return [
      'value',
      'label',
      'optionaltext',
      'additionaltext',
      'invalidtext',
      'disabled',
    ]
  }

  set value(value: string) {
    this.setAttribute('value', value.trim())
  }

  get value(): string {
    return this.getAttribute('value') ?? ''
  }

  set placeholder(value: string | undefined) {
    // Storybook provides undefined value
    if (value != null && value !== '') {
      this.setAttribute('placeholder', value)
    } else {
      this.removeAttribute('placeholder')
    }
  }

  get placeholder(): string {
    return this.getAttribute('placeholder') ?? ''
  }

  set label(value: string) {
    this.setAttribute('label', value)
  }

  get label(): string {
    return this.getAttribute('label') ?? ''
  }

  set optionalText(value: string) {
    // Storybook provides undefined value
    if (value != null && value !== '') {
      this.setAttribute('optionaltext', value)
    } else {
      this.removeAttribute('optionaltext')
    }
  }

  get optionalText(): string {
    return this.getAttribute('optionaltext') ?? ''
  }

  set additionalText(value: string) {
    // Storybook provides undefined value
    if (value != null && value !== '') {
      this.setAttribute('additionaltext', value)
    } else {
      this.removeAttribute('additionaltext')
    }
  }

  get additionalText(): string {
    return this.getAttribute('additionaltext') ?? ''
  }

  set invalidText(value: string | undefined) {
    // Storybook provides undefined value
    if (value != null && value !== '') {
      this.setAttribute('invalidtext', value)
    } else {
      this.removeAttribute('invalidtext')
    }
  }

  get invalidText(): string {
    return this.getAttribute('invalidtext') ?? ''
  }

  set disabled(isDisabled: boolean | undefined) {
    if (isDisabled === true) {
      this.setAttribute('disabled', '')
    } else {
      this.removeAttribute('disabled')
    }
  }

  get disabled(): boolean {
    const attrValue = this.getAttribute('disabled')

    return attrValue === '' || Boolean(attrValue)
  }

  attributeChangedCallback(name: string, oldVal: string, newVal: string) {
    if (oldVal === newVal) {
      return
    }

    switch (name) {
      case 'value': {
        this.onValueChange(newVal)

        break
      }

      case 'placeholder': {
        this.onValueChange(this.value)

        break
      }

      case 'label': {
        this.$label.textContent = newVal

        break
      }

      case 'optionaltext': {
        this.$optionalText.textContent = newVal

        break
      }

      case 'additionaltext': {
        this.$additionalText.textContent = newVal

        break
      }

      case 'invalidtext': {
        this.$invalidText.textContent = newVal

        break
      }

      case 'disabled': {
        this.$button.disabled = newVal === '' || Boolean(newVal)

        if (this.$button.disabled) {
          this.onCollapse()
        }

        break
      }
    }
  }

  onButtonClick = (e: Event) => {
    if (this.$button.ariaExpanded !== 'true') {
      this.onExpand()
    }

    e.stopPropagation()
  }

  onListboxClick = (e: Event) => {
    // Listbox overlaps button and label when open.
    // Clicking on listbox should collapse it.
    if (e.target === this.$listbox) {
      this.onCollapse()

      return
    }

    if (!(e.target instanceof Element)) {
      return
    }

    // Click on label happens just before click is forwarded to input
    if (e.target.tagName === 'LABEL') {
      const nextInputId = e.target.getAttribute('for')

      // Check if input under label is enabled
      if (
        nextInputId !== null &&
        nextInputId !== '' &&
        this.$listbox.querySelector<HTMLInputElement>(`#${nextInputId}:not(:disabled)`) !== null
      ) {
        // Store id now, so forwarded input click event use it
        this.prevKeyboardFocusId = nextInputId

        return
      }

      // Input under this label is disabled or does not exist
      // Since prev input lost focus because of label click, try focusing it back
      this.focusInput(
        this.prevKeyboardFocusId !== ''
          ? this.$listbox.querySelector<HTMLInputElement>(`#${this.prevKeyboardFocusId}`)
          : null
      )

      return
    }

    if (!(e.target instanceof HTMLInputElement)) {
      return
    }

    // Uncheck radio input
    // Space key sends click events only for unchecked radio inputs
    e.target.checked = false

    if (
      // Enter key press after navigating with arrow keys
      (e.target.type === 'submit' && this.prevKeyboardFocusId !== '') ||
      // Mouse click or Space key
      // Click on input received after clicking on label
      this.prevKeyboardFocusId === e.target.id
    ) {
      const $input = this.$listbox.querySelector<HTMLInputElement>(`#${this.prevKeyboardFocusId}`)!

      this.dispatchEvent(new CustomEvent('change', { detail: $input.value }))
      getEventHandler(this, 'onChange')?.($input.value)

      // Allows subsequent space and enter press to expand the listbox
      // Collapses the listbox by blur event
      this.$button.focus()
    } else {
      // Click received by navigating with arrow keys
      this.focusInput(e.target)
    }

    e.stopPropagation()
  }

  onSlotChange = () => {
    const $fragment = document.createDocumentFragment()

    this.$selectSlot.assignedNodes().forEach((node, i) => {
      if (node instanceof HTMLElement && node.tagName === 'SINCH-SELECT-OPTION') {
        const $input = document.createElement('input')
        const $label = document.createElement('label')

        $input.type = 'radio'
        $input.name = 'listbox'
        $input.id = `input_${i}`
        $input.value = node.getAttribute('value') ?? ''

        $label.setAttribute('for', $input.id)
        $label.setAttribute('role', 'option')
        $label.textContent = node.getAttribute('text') ?? ''

        const disabledAttributeValue = node.getAttribute('disabled')

        $input.disabled = disabledAttributeValue === '' || Boolean(disabledAttributeValue)

        $fragment.appendChild($input)
        $fragment.appendChild($label)
      }
    })

    this.$listbox.firstElementChild!.replaceChildren($fragment)

    // Update data-checked attribute and button textContent
    this.onValueChange(this.value)
  }

  onOutside = (e: FocusEvent) => {
    if (
      e.target !== this.$listbox &&
      e.relatedTarget !== this.$listbox &&
      !this.$listbox.contains(e.relatedTarget as Node | null)
    ) {
      this.onCollapse()
    }
  }

  onExpand = () => {
    this.$button.setAttribute('aria-expanded', 'true')

    // Try focusing selected input upon expand
    this.focusInput(this.$listbox.querySelector<HTMLInputElement>(`input[value="${this.value}"]`))
  }

  onCollapse = () => {
    this.$button.setAttribute('aria-expanded', 'false')
  }

  onValueChange = (value: string) => {
    this.clearCheckedAttributes()

    const $input = this.$listbox.querySelector<HTMLInputElement>(`input[value="${value}"]`)

    if ($input !== null && $input.disabled === false) {
      $input.setAttribute('data-checked', '')
      this.$listbox.setAttribute('aria-activedescendant', $input.id)
      this.$button.removeAttribute('unselected')
      this.$button.textContent = $input.nextElementSibling!.textContent
    } else {
      this.$button.setAttribute('unselected', '')
      this.$button.textContent = this.placeholder
    }
  }

  clearCheckedAttributes = () => {
    for (const $inp of Array.from(this.$listbox.querySelectorAll('input[data-checked]'))) {
      $inp.removeAttribute('data-checked')
    }
  }

  focusInput = ($input: HTMLInputElement | null) => {
    if ($input !== null && $input.disabled === false) {
      this.prevKeyboardFocusId = $input.id
      $input.focus()

      return
    }

    // Try focusing first non-disabled input
    const $enabledInput = this.$listbox.querySelector<HTMLInputElement>(`input:not([disabled])`)

    if ($enabledInput !== null) {
      this.prevKeyboardFocusId = $enabledInput.id
      $enabledInput.focus()
    }
  }
})

export type TSinchSelect = {
  value: string,
  label: string,
  placeholder?: string,
  optionalText?: string,
  invalidText?: string,
  additionalText?: string,
  disabled?: boolean,
  onChange: (value: string) => void,
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-select': TSinchSelect,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-select': HTMLElement & TSinchSelect,
  }
}
