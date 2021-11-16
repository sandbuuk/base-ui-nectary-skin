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
  $listboxSubmit: HTMLInputElement | null = null
  lastKeyboardHoverId = ''

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

    this.$button.addEventListener('click', this.onToggle)
    this.$listbox.addEventListener('blur', this.onOutside, true)
    this.$listbox.addEventListener('click', this.onListboxClick, true)
    this.$selectSlot.addEventListener('slotchange', this.onSlotChange)
  }

  disconnectedCallback() {
    this.$button.removeEventListener('click', this.onToggle)
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

        break
      }
    }
  }

  onToggle = (e: Event) => {
    if (this.$button.ariaExpanded !== 'true') {
      this.onExpand()
    }

    e.stopPropagation()
  }

  onListboxClick = (e: Event) => {
    // Listbox overlaps button and label. Clicking on listbox should collapse it.
    if (e.target === this.$listbox) {
      this.onCollapse()

      return
    }

    if (!(e.target instanceof Element)) {
      return
    }

    if (e.target.tagName === 'LABEL') {
      this.lastKeyboardHoverId = e.target.getAttribute('for') ?? ''

      return
    }

    if (!(e.target instanceof HTMLInputElement)) {
      return
    }

    if (e.target.type === 'radio') {
      e.target.checked = false
    }

    // Safari focus
    if (document.activeElement !== e.target && e.target.type === 'radio') {
      e.target.focus()
    }

    if (e.target.type === 'submit' || this.lastKeyboardHoverId === e.target.id) {
      const $input = this.$listbox.querySelector<HTMLInputElement>(`#${this.lastKeyboardHoverId}`)!

      getEventHandler(this, 'onChange')?.($input.value)

      this.dispatchEvent(
        new CustomEvent('change', {
          detail: $input.value,
        })
      )

      // This collapses the listbox
      this.$button.focus()
    }

    this.lastKeyboardHoverId = e.target.id

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

    // Create Form Submit if not created
    if (this.$listboxSubmit === null) {
      this.$listboxSubmit = document.createElement('input')
      this.$listboxSubmit.type = 'submit'
      this.$listboxSubmit.id = 'submit'
    }

    // Append Form Submit
    $fragment.appendChild(this.$listboxSubmit)

    this.$listbox.replaceChildren($fragment)

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

    // Focus selected input upon expand
    this.$listbox.querySelector<HTMLInputElement>(`input[value="${this.value}"]`)?.focus()
  }

  onCollapse = () => {
    this.$button.setAttribute('aria-expanded', 'false')
  }

  onValueChange = (value: string) => {
    this.clearCheckedAttributes()

    const $input = this.$listbox.querySelector(`input[value="${value}"]`)

    if ($input === null) {
      this.$button.textContent = this.placeholder

      return
    }

    $input.setAttribute('data-checked', '')

    this.$button.textContent = $input.nextElementSibling!.textContent
  }

  clearCheckedAttributes = () => {
    for (const $inp of Array.from(this.$listbox.querySelectorAll('input[data-checked]'))) {
      $inp.removeAttribute('data-checked')
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
