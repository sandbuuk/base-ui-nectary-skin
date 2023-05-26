import '../input'
import '../icon-button'
import '../color-swatch'
import '../color-menu'
import '../color-menu-option'
import '../popover'
import '../tabs'
import '../tabs-icon-option'
import '../emoji'
import '../text'
import '../icon'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  NectaryElement,
  updateAttribute,
  updateBooleanAttribute,
  getReactEventHandler,
  getRect,
  debounceTimeout,
  setClass,
} from '../utils'
import dataJson from './data.json'
import templateHTML from './template.html'
import type { TEmojiGroup, TEmoji, TSinchEmojiPickerElement, TSinchEmojiPickerReact } from './types'
import type { TSinchColorMenuElement } from '../color-menu/types'
import type { TSinchColorSwatchElement } from '../color-swatch/types'
import type { TSinchIconButtonElement } from '../icon-button/types'
import type { TSinchInputElement } from '../input/types'
import type { TSinchPopoverElement } from '../popover/types'
import type { TSinchTabsElement } from '../tabs/types'
import type { TRect } from '../types'

const groupLabels = [
  'Emotions',
  'People',
  'Animals and nature',
  'Food and drinks',
  'Travel and places',
  'Sports and activities',
  'Objects',
  'Symbols and flags',
]

const data = dataJson as TEmojiGroup[]
const template = document.createElement('template')
const MIN_SEARCH_LENGTH = 2
const SEARCH_DEBOUNCE_TIMEOUT = 300

template.innerHTML = templateHTML

defineCustomElement('sinch-emoji-picker', class extends NectaryElement {
  #$tabs: TSinchTabsElement
  #$searchInput: TSinchInputElement
  #$searchClearButton: HTMLElement
  #$skinPopover: TSinchPopoverElement
  #$skinMenu: TSinchColorMenuElement
  #$skinSwatch: TSinchColorSwatchElement
  #$skinButton: TSinchIconButtonElement
  #$list: HTMLElement
  #$notFound: HTMLElement
  #controller: AbortController | null = null
  #$sh: ShadowRoot
  #searchDebounce
  #currentSkinTone = 0
  #prevTabsValue: string | null = null

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$sh = shadowRoot
    this.#$tabs = shadowRoot.querySelector('#tabs')!
    this.#$searchInput = shadowRoot.querySelector('#search')!
    this.#$searchClearButton = shadowRoot.querySelector('#search-clear')!
    this.#$skinPopover = shadowRoot.querySelector('#skin-popover')!
    this.#$skinMenu = shadowRoot.querySelector('#skin-menu')!
    this.#$skinSwatch = shadowRoot.querySelector('#skin-swatch')!
    this.#$skinButton = shadowRoot.querySelector('#skin-button')!
    this.#$list = shadowRoot.querySelector('#list')!
    this.#$notFound = shadowRoot.querySelector('#not-found')!
    this.#searchDebounce = debounceTimeout(SEARCH_DEBOUNCE_TIMEOUT)(this.#updateSearch)
  }

  connectedCallback() {
    this.#controller = new AbortController()

    const { signal } = this.#controller

    this.#$tabs.addEventListener('-change', this.#onTabsChange as any, { signal })
    this.#$searchInput.addEventListener('-change', this.#onSearchChange as any, { signal })
    this.#$searchClearButton.addEventListener('-click', this.#onSearchClearClick, { signal })
    this.#$skinButton.addEventListener('-click', this.#onSkinButtonClick, { signal })
    this.#$skinPopover.addEventListener('-close', this.#onSkinPopoverClose, { signal })
    this.#$skinMenu.addEventListener('-change', this.#onSkinMenuChange as any, { signal })
    this.#$list.addEventListener('click', this.#onListClick, { signal })
    this.addEventListener('-change', this.#onChangeReactHandler, { signal })

    this.#updateTabs()
    this.#updateEmojis()
  }

  disconnectedCallback() {
    this.#controller!.abort()
    this.#searchDebounce.cancel()
  }

  get skinToneButtonRect(): TRect {
    return getRect(this.#$skinButton)
  }

  get searchInputRect(): TRect {
    return getRect(this.#$searchInput)
  }

  get searchClearButtonRect(): TRect {
    return getRect(this.#$searchClearButton)
  }

  nthSkinToneRect(index: number): TRect | null {
    return this.#$skinMenu.nthItemRect(index)
  }

  nthTabRect(index: number): TRect | null {
    return this.#$tabs.nthOptionRect(index)
  }

  nthEmojiRect(index: number): TRect | null {
    const $el = this.#$list.children[index]

    return $el != null ? getRect($el) : null
  }

  #onListClick = (e: Event) => {
    const value = (e.target as Element).getAttribute('data-value')

    if (value === null) {
      return
    }

    this.dispatchEvent(
      new CustomEvent('-change', { detail: value })
    )
  }

  #onTabsChange = (e: CustomEvent<string>) => {
    const value = e.detail

    updateAttribute(this.#$tabs, 'value', value)
    updateAttribute(this.#$searchInput, 'value', '')
    this.#updateEmojis()
  }

  #onSearchChange = (e: CustomEvent<string>) => {
    this.#$searchInput.value = e.detail
    this.#searchDebounce.fn()
    setClass(this.#$searchClearButton, 'active', e.detail.length > 0)
  }

  #onSearchClearClick = () => {
    this.#$searchInput.value = ''
    this.#$searchInput.focus()
    this.#searchDebounce.fn()
    setClass(this.#$searchClearButton, 'active', false)
  }

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
  }

  get focusable() {
    return true
  }

  #getDocumentRoot(): Document {
    return Reflect.has(this.#$sh, 'createElement')
      ? this.#$sh as any as Document
      : document
  }

  #updateSearch = () => {
    const value = this.#$searchInput.value

    if (value.length < MIN_SEARCH_LENGTH) {
      if (this.#isSearchMode()) {
        if (this.#prevTabsValue !== null) {
          this.#$tabs.setAttribute('value', this.#prevTabsValue)
        }

        this.#updateEmojis()
      }

      return
    }

    const currentActiveTab = this.#$tabs.getAttribute('value')

    if (currentActiveTab !== null) {
      this.#prevTabsValue = currentActiveTab
    }

    this.#$tabs.removeAttribute('value')
    this.#updateSearchEmojis()
  }

  #updateTabs() {
    const tabOptions = this.#$tabs.querySelectorAll('sinch-tabs-icon-option')
    const activeTabName = data[0].name
    const numTabs = Math.min(data.length, tabOptions.length)

    for (let i = 0; i < numTabs; i++) {
      const group = data[i]
      const tabOption = tabOptions[i]

      tabOption.setAttribute('value', group.name)
      tabOption.setAttribute('aria-label', groupLabels[i])
    }

    updateAttribute(this.#$tabs, 'value', activeTabName)
  }

  *#iterateSearchEmojis(searchValue: string, skinTone: number): IterableIterator<TEmoji> {
    for (const group of data) {
      for (const entry of group.emojis) {
        if (entry.label.toLowerCase().includes(searchValue)) {
          const hasSkins = entry.skins != null

          if (skinTone === 0 || !hasSkins) {
            yield entry
          } else if (hasSkins) {
            for (const skin of entry.skins!) {
              if (
                skinTone === skin.tone ||
                (Array.isArray(skin.tone) && skin.tone.includes(skinTone))
              ) {
                yield skin
              }
            }
          }
        }
      }
    }
  }

  *#iterateGroupEmojis(group: TEmojiGroup, skinTone: number): IterableIterator<TEmoji> {
    for (const entry of group.emojis) {
      const hasSkins = entry.skins != null

      if (skinTone === 0 || !hasSkins) {
        yield entry
      } else if (hasSkins) {
        for (const skin of entry.skins!) {
          if (
            skinTone === skin.tone ||
            (Array.isArray(skin.tone) && skin.tone.includes(skinTone))
          ) {
            yield skin
          }
        }
      }
    }
  }

  #updateSearchEmojis() {
    const searchValue = this.#$searchInput.value

    if (searchValue.length < MIN_SEARCH_LENGTH) {
      return
    }

    const doc = this.#getDocumentRoot()
    const fragment = document.createDocumentFragment()
    let someFound = false

    for (const entry of this.#iterateSearchEmojis(searchValue, this.#currentSkinTone)) {
      const el = this.#createEmojiElement(doc, entry)

      someFound = true
      fragment.appendChild(el)
    }

    setClass(this.#$notFound, 'active', !someFound)

    this.#$list.replaceChildren(fragment)
    this.#$list.scrollTo(0, 0)
  }

  #updateEmojis() {
    if (this.#isSearchMode()) {
      return
    }

    const activeGroup = getAttribute(this.#$tabs, 'value')
    const group = data.find((group) => group.name === activeGroup)

    if (group == null) {
      return
    }

    const doc = this.#getDocumentRoot()
    const fragment = document.createDocumentFragment()

    for (const entry of this.#iterateGroupEmojis(group, this.#currentSkinTone)) {
      const el = this.#createEmojiElement(doc, entry)

      fragment.appendChild(el)
    }

    this.#$list.replaceChildren(fragment)
    this.#$list.scrollTo(0, 0)
  }

  #onSkinButtonClick = () => {
    updateBooleanAttribute(this.#$skinPopover, 'open', !getBooleanAttribute(this.#$skinPopover, 'open'))
  }

  #onSkinPopoverClose = () => {
    updateBooleanAttribute(this.#$skinPopover, 'open', false)
  }

  #onSkinMenuChange = (e: CustomEvent<string>) => {
    this.#$skinSwatch.name = e.detail
    this.#$skinMenu.value = e.detail

    switch (e.detail) {
      case 'skintone-default': {
        this.#currentSkinTone = 0

        break
      }
      case 'skintone-light': {
        this.#currentSkinTone = 1

        break
      }
      case 'skintone-light-medium': {
        this.#currentSkinTone = 2

        break
      }
      case 'skintone-medium': {
        this.#currentSkinTone = 3

        break
      }
      case 'skintone-medium-dark': {
        this.#currentSkinTone = 4

        break
      }
      case 'skintone-dark': {
        this.#currentSkinTone = 5

        break
      }
    }

    this.#onSkinPopoverClose()

    if (this.#isSearchMode()) {
      this.#updateSearchEmojis()
    } else {
      this.#updateEmojis()
    }
  }

  #isSearchMode() {
    const activeTab = getAttribute(this.#$tabs, 'value')

    return activeTab === null || activeTab.length === 0
  }

  #createEmojiElement(doc: Document, emoji: TEmoji) {
    const btn = doc.createElement('sinch-icon-button')
    const el = doc.createElement('sinch-emoji')

    el.setAttribute('slot', 'icon')
    el.setAttribute('char', emoji.emoji)
    el.setAttribute('label', emoji.label)

    btn.setAttribute('aria-label', emoji.label)
    btn.setAttribute('size', 's')
    btn.setAttribute('data-value', emoji.emoji)
    btn.appendChild(el)

    return btn
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-emoji-picker': TSinchEmojiPickerReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-emoji-picker': TSinchEmojiPickerElement,
  }
}
