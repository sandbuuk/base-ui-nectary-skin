import '../icon-button'
import '../icons/keyboard-arrow-right'
import '../icons/keyboard-double-arrow-right'
import '../icons/keyboard-arrow-left'
import '../icons/keyboard-double-arrow-left'
import '../icons/delete-outline'
import '../icons/today'
import '../text'
import {
  defineCustomElement,
  getAttribute,
  getRect,
  NectaryElement,
  setClass,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import templateHTML from './template.html'
import {
  areDatesEqual,
  assertDate,
  assertLocale,
  assertMinMax,
  assertValue,
  canGoNextMonth,
  canGoNextYear,
  canGoPrevMonth,
  canGoPrevYear,
  clampMaxDate,
  clampMinDate,
  dateToIso,
  decMonth,
  decYear,
  getCalendarMonth,
  getDayNames,
  getMonthNames,
  incMonth,
  incYear,
  isDateBetween,
  isoToDate,
  isValidDate,
  today,
} from './utils'
import type { TSinchIconButtonElement } from '../icon-button/types'
import type { TSinchTextElement } from '../text/types'
import type { TRect } from '../types'
import type { TSinchDatePickerElement, TSinchDatePickerReact } from './types'

const template = document.createElement('template')

template.innerHTML = templateHTML

defineCustomElement('sinch-date-picker', class extends NectaryElement {
  #$month: HTMLElement
  #$weeks: HTMLElement[]
  #$days: HTMLElement[][]
  #$weekDayNames: HTMLElement[]
  #date: Date | null = null
  #minDate: Date | null = null
  #maxDate: Date | null = null
  #$prevMonth: TSinchIconButtonElement
  #$nextMonth: TSinchIconButtonElement
  #$prevYear: TSinchIconButtonElement
  #$nextYear: TSinchIconButtonElement
  #$date: TSinchTextElement
  #monthNames: string[]

  constructor() {
    super()

    const shadowRoot = this.attachShadow()

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#$prevMonth = shadowRoot.querySelector('#prev-month')!
    this.#$nextMonth = shadowRoot.querySelector('#next-month')!
    this.#$prevYear = shadowRoot.querySelector('#prev-year')!
    this.#$nextYear = shadowRoot.querySelector('#next-year')!
    this.#$date = shadowRoot.querySelector('#date')!
    this.#$month = shadowRoot.querySelector('#month')!
    this.#$days = []
    this.#$weeks = []
    this.#monthNames = []

    shadowRoot.querySelectorAll('.week').forEach((week, i) => {
      this.#$weeks.push(week as HTMLElement)
      this.#$days[i] = []

      week.querySelectorAll('.day').forEach((day) => {
        this.#$days[i].push(day as HTMLElement)
      })
    })

    this.#$weekDayNames = Array.from(shadowRoot.querySelectorAll('#week-day-names > .week-day-name'))
  }

  connectedCallback() {
    this.#$prevMonth.addEventListener('click', this.#onPrevMonthClick)
    this.#$nextMonth.addEventListener('click', this.#onNextMonthClick)
    this.#$prevYear.addEventListener('click', this.#onPrevYearClick)
    this.#$nextYear.addEventListener('click', this.#onNextYearClick)
    this.#$month.addEventListener('click', this.#onDateClick)

    // Dont assert here
    // Angular sets attributes after connect
  }

  disconnectedCallback() {
    this.#$prevMonth.removeEventListener('click', this.#onPrevMonthClick)
    this.#$nextMonth.removeEventListener('click', this.#onNextMonthClick)
    this.#$prevYear.removeEventListener('click', this.#onPrevYearClick)
    this.#$nextYear.removeEventListener('click', this.#onNextYearClick)
    this.#$month.removeEventListener('click', this.#onDateClick)
  }

  static get observedAttributes() {
    return ['value', 'min', 'max', 'locale']
  }

  attributeChangedCallback(name: string, prevValue: string | null, newVal: string | null) {
    if (newVal === prevValue) {
      return
    }

    switch (name) {
      case 'value': {
        assertValue(newVal)
        this.#date = newVal.length > 0 ? isoToDate(newVal) : today()

        if (!isValidDate(this.#date)) {
          this.#date = today()
        }

        // Dont show panel below min date
        if (this.#minDate !== null) {
          clampMinDate(this.#date, this.#minDate)
        }

        // Dont show panel above max date
        if (this.#maxDate !== null) {
          clampMaxDate(this.#date, this.#maxDate)
        }

        this.#render()

        break
      }

      case 'min': {
        assertMinMax(newVal, name)
        this.#minDate = isoToDate(newVal)
        assertDate(this.#minDate, name, newVal)

        // Dont show panel below min date
        if (this.#date !== null) {
          clampMinDate(this.#date, this.#minDate)
        }

        this.#render()

        break
      }

      case 'max': {
        assertMinMax(newVal, name)
        this.#maxDate = isoToDate(newVal)
        assertDate(this.#maxDate, name, newVal)

        // Dont show panel above max date
        if (this.#date !== null) {
          clampMaxDate(this.#date, this.#maxDate)
        }

        this.#render()

        break
      }

      case 'locale': {
        assertLocale(newVal)

        const names = getDayNames(newVal)

        this.#$weekDayNames.forEach(($day, i) => {
          $day.textContent = names[i]
        })

        this.#monthNames = getMonthNames(newVal)
        this.#render()

        break
      }
    }
  }

  get nodeName() {
    return 'select'
  }

  set locale(value: string) {
    updateAttribute(this, 'locale', value)
  }

  get locale(): string {
    return getAttribute(this, 'locale')!
  }

  set value(value: string) {
    updateAttribute(this, 'value', value)
  }

  get value(): string {
    return getAttribute(this, 'value', '')
  }

  set min(value: string) {
    updateAttribute(this, 'min', value)
  }

  get min(): string {
    return getAttribute(this, 'min', '')
  }

  set max(value: string) {
    updateAttribute(this, 'max', value)
  }

  get max(): string {
    return getAttribute(this, 'max', '')
  }

  get prevYearButtonRect(): TRect {
    return getRect(this.#$prevYear)
  }

  get nextYearButtonRect(): TRect {
    return getRect(this.#$nextYear)
  }

  get prevMonthButtonRect(): TRect {
    return getRect(this.#$prevMonth)
  }

  get nextMonthButtonRect(): TRect {
    return getRect(this.#$nextMonth)
  }

  nthButtonRect(index: number): TRect | null {
    if (index < 0 || index > 30) {
      return null
    }

    const indexOffset = this.#$days[0].findIndex((el) => el.getAttribute('data-date') !== null)

    if (indexOffset < 0) {
      return null
    }

    const rowIndex = Math.floor((indexOffset + index) / 7)
    const colIndex = (indexOffset + index) % 7

    const $el = this.#$days[rowIndex]?.[colIndex]

    if ($el == null) {
      return null
    }

    return getRect($el)
  }

  #onPrevMonthClick = () => {
    decMonth(this.#date!, this.#minDate!)

    this.#render()
  }

  #onNextMonthClick = () => {
    incMonth(this.#date!, this.#maxDate!)

    this.#render()
  }

  #onPrevYearClick = () => {
    decYear(this.#date!, this.#minDate!)

    this.#render()
  }

  #onNextYearClick = () => {
    incYear(this.#date!, this.#maxDate!)

    this.#render()
  }

  #onDateClick = (e: Event) => {
    const dateIso = (e.target as HTMLElement).getAttribute('data-date')

    if (dateIso === null || dateIso.length === 0) {
      return
    }

    this.dispatchEvent(
      new CustomEvent('change', { detail: dateIso, bubbles: true })
    )
  }

  #render() {
    // Wait for all attributes initialize before first render
    if (this.#date === null || this.#minDate === null || this.#maxDate === null || this.locale === null) {
      return
    }

    const valueDate = isoToDate(this.value)
    const todayDate = new Date()
    const month = getCalendarMonth(this.#date)

    updateBooleanAttribute(this.#$prevMonth, 'disabled', canGoPrevMonth(this.#date, this.#minDate) === false)
    updateBooleanAttribute(this.#$nextMonth, 'disabled', canGoNextMonth(this.#date, this.#maxDate) === false)
    updateBooleanAttribute(this.#$prevYear, 'disabled', canGoPrevYear(this.#date, this.#minDate) === false)
    updateBooleanAttribute(this.#$nextYear, 'disabled', canGoNextYear(this.#date, this.#maxDate) === false)

    this.#$date.textContent = `${this.#monthNames[this.#date.getMonth()]} ${this.#date.getFullYear()}`

    this.#$days.forEach(($week, wi) => {
      let isEmptyWeek = true

      $week.forEach(($day, di) => {
        const week = month[wi]
        const day = week?.[di]

        $day.classList.remove('selected')
        $day.classList.remove('today')

        if (day == null) {
          $day.textContent = ''
          $day.removeAttribute('data-date')
          $day.setAttribute('disabled', '')
          $day.setAttribute('aria-hidden', 'true')
        } else {
          const dayIso = dateToIso(day)

          $day.textContent = day.getDate().toString()
          $day.setAttribute('data-date', dayIso)

          if (isDateBetween(day, this.#minDate!, this.#maxDate!)) {
            $day.removeAttribute('disabled')
            $day.removeAttribute('aria-hidden')
          } else {
            $day.setAttribute('disabled', '')
            $day.setAttribute('aria-hidden', 'true')
          }

          if (areDatesEqual(day, valueDate)) {
            $day.classList.add('selected')
          } else if (areDatesEqual(day, todayDate)) {
            $day.classList.add('today')
          }

          isEmptyWeek = false
        }
      })

      setClass(this.#$weeks[wi], 'empty', isEmptyWeek)
    })
  }
})

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'sinch-date-picker': TSinchDatePickerReact,
    }
  }

  interface HTMLElementTagNameMap {
    'sinch-date-picker': TSinchDatePickerElement,
  }
}
