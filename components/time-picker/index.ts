import '../icon-button'
import '../icons/done'
import '../icons/arrow-drop-up'
import '../icons/arrow-drop-down'
import '../segmented-control'
import '../segmented-control-option'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getRect,
  isAttrTrue,
  NectaryElement,
  setClass,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import { getNeedleRotationDeg, getShortestCssDeg, hourToIndex, parseTime, stringifyHour, stringifyHourFace, stringifyMinute, stringifyTime } from './utils'
import type { TSinchSegmentedControlElement } from '../segmented-control/types'
import type { TRect } from '../types'
import type { TSinchTimePickerElement, TSinchTimePickerReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

const PICKER_RADIUS = 216 / 2
const MINUTE_DIGIT_SIZE = 30
const HOUR_12_DIGIT_SIZE = 26
const HOUR_24_DIGIT_SIZE = 26
const MINUTE_RADIUS = PICKER_RADIUS - MINUTE_DIGIT_SIZE
const HOUR_12_RADIUS = MINUTE_RADIUS - HOUR_12_DIGIT_SIZE
const HOUR_24_RADIUS = HOUR_12_RADIUS - HOUR_24_DIGIT_SIZE
const NEEDLE_HOUR_12_LENGTH = HOUR_12_RADIUS
const NEEDLE_HOUR_24_LENGTH = HOUR_24_RADIUS
const NEEDLE_MINUTE_LENGTH = MINUTE_RADIUS

defineCustomElement('sinch-time-picker', class extends NectaryElement {
  #$pickerHours: HTMLElement
  #$pickerMinutes: HTMLElement
  #$pickerTouch: HTMLElement
  #$needleHour: HTMLElement
  #$needleMinute: HTMLElement
  #$headerHours: HTMLElement
  #$headerHoursText: HTMLElement
  #$headerMinutes: HTMLElement
  #$headerMinutesText: HTMLElement
  #$ampm: TSinchSegmentedControlElement
  #$submitButton: HTMLButtonElement
  #hour: number = 0
  #minute: number = 0
  constructor() {
    super()

    const shadowRoot = this.attachShadow({ delegatesFocus: false })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$pickerHours = shadowRoot.querySelector('#picker-hours')!
    this.#$pickerMinutes = shadowRoot.querySelector('#picker-minutes')!
    this.#$pickerTouch = shadowRoot.querySelector('#picker')!
    this.#$needleHour = shadowRoot.querySelector('#needle-hour')!
    this.#$needleMinute = shadowRoot.querySelector('#needle-minute')!
    this.#$headerHours = shadowRoot.querySelector('#header-hours')!
    this.#$headerMinutes = shadowRoot.querySelector('#header-minutes')!
    this.#$headerHoursText = shadowRoot.querySelector('#header-hours > span')!
    this.#$headerMinutesText = shadowRoot.querySelector('#header-minutes > span')!
    this.#$ampm = shadowRoot.querySelector('#ampm')!
    this.#$submitButton = shadowRoot.querySelector('#submit')!

    this.#$needleMinute.style.height = `${NEEDLE_MINUTE_LENGTH}px`
    this.#$needleHour.style.height = `${NEEDLE_HOUR_12_LENGTH}px`

    const MINUTE_DIGIT_RADIUS = MINUTE_RADIUS + MINUTE_DIGIT_SIZE / 2
    const HOUR_12_DIGIT_RADIUS = HOUR_12_RADIUS + HOUR_12_DIGIT_SIZE / 2
    const HOUR_24_DIGIT_RADIUS = HOUR_24_RADIUS + HOUR_24_DIGIT_SIZE / 2

    const hours12Frag = document.createDocumentFragment()

    // Hours 12
    for (let i = 0; i < 12; i++) {
      const rad = Math.PI / 6 * (i - 3)
      const el = document.createElement('div')
      const x = Math.cos(rad) * HOUR_12_DIGIT_RADIUS
      const y = Math.sin(rad) * HOUR_12_DIGIT_RADIUS
      const hourDisplayValue = stringifyHourFace(i)

      el.className = 'digit-hour-12'
      el.style.transform = `translate(${x}px, ${y}px)`
      el.textContent = hourDisplayValue

      hours12Frag.appendChild(el)
    }

    this.#$pickerHours.appendChild(hours12Frag)

    // Hours 24
    const hours24Frag = document.createDocumentFragment()

    for (let i = 12; i < 24; i++) {
      const rad = Math.PI / 6 * (i - 3)
      const el = document.createElement('div')
      const x = Math.cos(rad) * HOUR_24_DIGIT_RADIUS
      const y = Math.sin(rad) * HOUR_24_DIGIT_RADIUS
      const hourDisplayValue = stringifyHourFace(i)

      el.className = 'digit-hour-24'
      el.style.transform = `translate(${x}px, ${y}px)`
      el.textContent = hourDisplayValue

      hours24Frag.appendChild(el)
    }

    this.#$pickerHours.appendChild(hours24Frag)

    // Minutes
    const minutesFrag = document.createDocumentFragment()

    for (let i = 0; i < 60; i += 5) {
      const rad = Math.PI / 30 * (i - 15)
      const el = document.createElement('div')
      const x = Math.cos(rad) * MINUTE_DIGIT_RADIUS
      const y = Math.sin(rad) * MINUTE_DIGIT_RADIUS

      el.className = 'digit-minute'
      el.style.transform = `translate(${x}px, ${y}px)`
      el.textContent = stringifyMinute(i)

      minutesFrag.appendChild(el)
    }

    this.#$pickerMinutes.appendChild(minutesFrag)
  }

  connectedCallback() {
    this.#$pickerTouch.addEventListener('click', this.#onPickerClick)
    this.#$ampm.addEventListener('change', this.#onAmPmChange)
    this.#$submitButton.addEventListener('click', this.#onSubmitButtonClick)
    this.#$headerHours.addEventListener('keydown', this.#onHoursKeydown)
    this.#$headerMinutes.addEventListener('keydown', this.#onMinutesKeydown)
  }

  disconnectedCallback() {
    this.#$pickerTouch.removeEventListener('click', this.#onPickerClick)
    this.#$ampm.removeEventListener('change', this.#onAmPmChange)
    this.#$submitButton.removeEventListener('click', this.#onSubmitButtonClick)
    this.#$headerHours.removeEventListener('keydown', this.#onHoursKeydown)
    this.#$headerMinutes.removeEventListener('keydown', this.#onMinutesKeydown)
  }

  static get observedAttributes() {
    return ['value', 'ampm', 'submit-aria-label']
  }

  attributeChangedCallback(name: string, prevValue: string | null, newVal: string | null) {
    if (newVal === prevValue) {
      return
    }

    switch (name) {
      case 'value': {
        if (newVal === null) {
          throw new Error('Missing "value" attribute')
        }

        const { hours, minutes } = parseTime(newVal)

        this.#hour = hours
        this.#minute = minutes

        this.#render()

        break
      }

      case 'ampm': {
        const isAmpm = isAttrTrue(newVal)

        updateBooleanAttribute(this, 'ampm', isAmpm)

        this.#render()

        break
      }

      case 'submit-aria-label': {
        this.#$submitButton.ariaLabel = newVal

        break
      }
    }
  }

  get nodeName() {
    return 'select'
  }

  set value(value: string) {
    updateAttribute(this, 'value', value)
  }

  get value(): string {
    return getAttribute(this, 'value', '')
  }

  set ampm(value: boolean) {
    updateBooleanAttribute(this, 'ampm', value)
  }

  get ampm(): boolean {
    return getBooleanAttribute(this, 'ampm')
  }

  get submitButtonRect(): TRect {
    return getRect(this.#$submitButton)
  }

  get amButtonRect(): TRect | null {
    if (!this.ampm) {
      return null
    }

    const $am = this.#$ampm.querySelector('[value="am"]')

    return $am != null ? getRect($am) : null
  }

  get pmButtonRect(): TRect | null {
    if (!this.ampm) {
      return null
    }

    const $pm = this.#$ampm.querySelector('[value="pm"]')

    return $pm != null ? getRect($pm) : null
  }

  hourDigitRect(hour: number): TRect | null {
    const $digit = this.#$pickerHours.children[hourToIndex(hour, !this.ampm)]

    return $digit != null ? getRect($digit) : null
  }

  minuteDigitRect(minute: number): TRect | null {
    const $digit = this.#$pickerMinutes.children[Math.round(minute / 5)]

    return $digit != null ? getRect($digit) : null
  }

  #getClickDegree(x: number, y: number): [number, number] {
    const touchRect = this.#$pickerTouch.getBoundingClientRect()
    const cx = touchRect.width / 2
    const cy = touchRect.height / 2
    const px = x - touchRect.x
    const py = touchRect.height - y + touchRect.y
    const dx = px - cx
    const dy = py - cy

    const len = Math.sqrt(dx * dx + dy * dy)
    const cosRad = dx / len
    const rad = Math.acos(cosRad * (dy < 0 ? -1 : 1))
    const deg = rad * (180 / Math.PI)

    let cssDeg = (deg - 90 - 360) % 360 * -1

    if (dy < 0) {
      cssDeg += 180
    }

    // Row 0: minutes, Row 1: hours 12, Row 2: hours 24
    const rowIndex = len > MINUTE_RADIUS ? 0 : len > HOUR_12_RADIUS ? 1 : 2

    return [cssDeg, rowIndex]
  }

  #onPickerClick = (e: MouseEvent) => {
    const [cssDeg, rowIndex] = this.#getClickDegree(e.x, e.y)
    const isHourRowClick = rowIndex > 0
    const isHour24RowClick = rowIndex > 1

    if (isHourRowClick) {
      const digitIndex = Math.round(cssDeg / 30) % 12
      const is24 = getBooleanAttribute(this, 'ampm') === false

      if (is24) {
        if (isHour24RowClick) {
          this.#hour = digitIndex === 0 ? 0 : digitIndex + 12
        } else {
          this.#hour = digitIndex === 0 ? 12 : digitIndex
        }
      } else {
        this.#hour = digitIndex + (this.#$ampm.value === 'pm' ? 12 : 0)
      }

      this.#$headerHours.focus()
    } else {
      this.#minute = Math.round(cssDeg / 6) % 60

      this.#$headerMinutes.focus()
    }

    this.#render()
  }

  #render() {
    const is24 = getBooleanAttribute(this, 'ampm') === false

    this.#selectHour(is24)
    this.#selectMinute()

    this.#$headerHoursText.textContent = stringifyHour(this.#hour, is24)
    this.#$headerMinutesText.textContent = stringifyMinute(this.#minute)

    updateAttribute(this.#$headerHours, 'aria-valuenow', this.#hour)
    updateAttribute(this.#$headerHours, 'aria-valuetext', this.#hour)
    updateAttribute(this.#$headerMinutes, 'aria-valuenow', this.#minute)
    updateAttribute(this.#$headerMinutes, 'aria-valuetext', this.#minute)
  }

  #selectHour(is24: boolean) {
    const $hours = this.#$pickerHours.children
    const hourDigitIndex = this.#hour % 12
    const selectedIndex = hourToIndex(this.#hour, is24)
    const currentCssDeg = getNeedleRotationDeg(this.#$needleHour)
    const hourCssDeg = getShortestCssDeg(currentCssDeg, hourDigitIndex * 30)

    for (let i = 0; i < $hours.length; i++) {
      setClass($hours[i], 'selected', i === selectedIndex)
    }

    this.#$needleHour.style.transform = `rotate(${hourCssDeg}deg)`

    if (is24) {
      if (this.#hour > 0 && this.#hour <= 12) {
        this.#$needleHour.style.height = `${NEEDLE_HOUR_12_LENGTH}px`
      } else {
        this.#$needleHour.style.height = `${NEEDLE_HOUR_24_LENGTH}px`
      }
    } else {
      this.#$needleHour.style.height = `${NEEDLE_HOUR_12_LENGTH}px`
    }

    this.#$ampm.setAttribute('value', (this.#hour >= 0 && this.#hour < 12) ? 'am' : 'pm')
  }

  #selectMinute() {
    const $minutes = this.#$pickerMinutes.children
    const isNeedleSelected = this.#minute % 5 === 0
    const selectedIndex = this.#minute / 5
    const currentCssDeg = getNeedleRotationDeg(this.#$needleMinute)
    const minuteCssDeg = getShortestCssDeg(currentCssDeg, this.#minute * 6)

    for (let i = 0; i < $minutes.length; i++) {
      setClass($minutes[i], 'selected', selectedIndex === i)
    }

    setClass(this.#$needleMinute, 'selected', isNeedleSelected)
    this.#$needleMinute.style.transform = `rotate(${minuteCssDeg}deg)`
  }

  #onAmPmChange = (e: Event) => {
    e.stopPropagation()

    const value = (e as CustomEvent).detail

    switch (value) {
      case 'am': {
        if (this.#hour >= 12) {
          this.#hour -= 12
          this.#render()
        }

        break
      }

      case 'pm': {
        if (this.#hour < 12) {
          this.#hour += 12
          this.#render()
        }

        break
      }
    }
  }

  #onSubmitButtonClick = () => {
    const value = stringifyTime(this.#hour, this.#minute)

    this.dispatchEvent(
      new CustomEvent('change', {
        bubbles: true,
        detail: value,
      })
    )
  }

  #onHoursKeydown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowUp': {
        this.#hour = (this.#hour + 1) % 24

        this.#render()

        break
      }

      case 'ArrowDown': {
        this.#hour = (this.#hour + 23) % 24

        this.#render()

        break
      }
    }
  }

  #onMinutesKeydown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowUp': {
        this.#minute = (this.#minute + 1) % 60

        this.#render()

        break
      }

      case 'ArrowDown': {
        this.#minute = (this.#minute + 59) % 60

        this.#render()

        break
      }
    }
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-time-picker': TSinchTimePickerReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-time-picker': TSinchTimePickerElement,
  }
}
