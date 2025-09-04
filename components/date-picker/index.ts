import '../icon'
import '../text'
import {
  defineCustomElement,
  getAttribute,
  getBooleanAttribute,
  getReactEventHandler,
  getRect,
  getTargetAttribute,
  isAttrTrue,
  NectaryElement,
  packCsv,
  setClass,
  unpackCsv,
  updateAttribute,
  updateBooleanAttribute,
} from '../utils'
import { setFormValue } from '../utils/form'
import templateHTML from './template.html?raw'
import {
  areDatesEqual,
  canGoNextMonth,
  canGoNextYear,
  canGoPrevMonth,
  canGoPrevYear,
  clampMaxDate,
  clampMinDate,
  cloneDate,
  dateToIso,
  decMonth,
  decYear,
  getCalendarMonth,
  getDayNames,
  getMonthNames,
  incMonth,
  incYear,
  isDateBetween,
  isDateOnScreen,
  isoToDate,
  isValidDate,
  sortDates,
  today,
} from './utils'
import type { TRect } from '../types'

export * from './types'

type TSinchButtonElement = HTMLElementTagNameMap['sinch-button']
type TSinchTextElement = HTMLElementTagNameMap['sinch-text']

const template = document.createElement('template')

template.innerHTML = templateHTML

export class DatePicker extends NectaryElement {
  #$month: HTMLElement
  #$weeks: HTMLElement[]
  #$days: HTMLElement[][]
  #$weekDayNames: HTMLElement[]
  #uiDate: Date | null = null
  #date1: Date | null = null
  #date2: Date | null = null
  #minDate: Date | null = null
  #maxDate: Date | null = null
  #$prevMonth: TSinchButtonElement
  #$nextMonth: TSinchButtonElement
  #$prevYear: TSinchButtonElement
  #$nextYear: TSinchButtonElement
  #$date: TSinchTextElement
  #monthNames: string[]
  #controller: AbortController | null = null
  #isHoverSubscribed = false
  #internals: ElementInternals

  static formAssociated = true

  constructor() {
    super()

    const shadowRoot = this.attachShadow({ delegatesFocus: true })

    shadowRoot.appendChild(template.content.cloneNode(true))

    this.#internals = this.attachInternals()
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
    this.#controller = new AbortController()

    const options: AddEventListenerOptions = {
      signal: this.#controller.signal,
    }

    this.#$prevMonth.addEventListener('click', this.#onPrevMonthClick, options)
    this.#$nextMonth.addEventListener('click', this.#onNextMonthClick, options)
    this.#$prevYear.addEventListener('click', this.#onPrevYearClick, options)
    this.#$nextYear.addEventListener('click', this.#onNextYearClick, options)
    this.#$month.addEventListener('click', this.#onDateClick, options)
    this.addEventListener('-change', this.#onChangeReactHandler, options)
  }

  disconnectedCallback() {
    this.#unsubscribeRangeHover()
    this.#controller!.abort()
    this.#controller = null
  }

  formAssociatedCallback() {
    setFormValue(this.#internals, this.value)
  }

  formResetCallback() {
    this.value = ''
    setFormValue(this.#internals, '')
  }

  formStateRestoreCallback(state: string | FormData | null) {
    if (this.#internals.form === null || getBooleanAttribute(this.#internals.form, 'data-form-state-restore') === false) {
      return
    }

    if (state !== null) {
      const value = typeof state === 'string' ? state : state.get(this.name)

      this.value = value?.toString() ?? ''
      setFormValue(this.#internals, value?.toString() ?? '')
    }
  }

  static get observedAttributes() {
    return [
      'value',
      'min',
      'max',
      'locale',
      'range',
      'prev-year-aria-label',
      'next-year-aria-label',
      'prev-month-aria-label',
      'next-month-aria-label',
    ]
  }

  attributeChangedCallback(name: string, prevValue: string | null, newVal: string | null) {
    switch (name) {
      case 'value': {
        this.#onValueChange()

        break
      }

      case 'min': {
        this.#minDate = isoToDate(newVal!)

        // Dont show panel below min date
        if (this.#uiDate !== null) {
          clampMinDate(this.#uiDate, this.#minDate)
        }

        this.#render()

        break
      }

      case 'max': {
        this.#maxDate = isoToDate(newVal!)

        // Dont show panel above max date
        if (this.#uiDate !== null) {
          clampMaxDate(this.#uiDate, this.#maxDate)
        }

        this.#render()

        break
      }

      case 'locale': {
        const names = getDayNames(newVal!)

        this.#$weekDayNames.forEach(($day, i) => {
          $day.textContent = names[i]
        })

        this.#monthNames = getMonthNames(newVal!)
        this.#render()

        break
      }

      case 'range': {
        const isRange = isAttrTrue(newVal)

        if (isRange) {
          this.#onValueChange()
        } else {
          this.#unsubscribeRangeHover()
        }

        break
      }

      case 'prev-year-aria-label': {
        updateAttribute(this.#$prevYear, 'aria-label', newVal)

        break
      }

      case 'next-year-aria-label': {
        updateAttribute(this.#$nextYear, 'aria-label', newVal)

        break
      }

      case 'prev-month-aria-label': {
        updateAttribute(this.#$prevMonth, 'aria-label', newVal)

        break
      }

      case 'next-month-aria-label': {
        updateAttribute(this.#$nextMonth, 'aria-label', newVal)

        break
      }
    }
  }

  set name(value: string) {
    updateAttribute(this, 'name', value)
  }

  get name(): string {
    return getAttribute(this, 'name', '')
  }

  set locale(value: string) {
    updateAttribute(this, 'locale', value)
  }

  get locale(): string {
    return getAttribute(this, 'locale', '')
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

  set range(isRanged: boolean) {
    updateBooleanAttribute(this, 'range', isRanged)
  }

  get range(): boolean {
    return getBooleanAttribute(this, 'range')
  }

  set prevMonthAriaLabel(value: string) {
    updateAttribute(this, 'prev-month-aria-label', value)
  }

  get prevMonthAriaLabel(): string {
    return getAttribute(this, 'prev-month-aria-label', '')
  }

  set nextMonthAriaLabel(value: string) {
    updateAttribute(this, 'next-month-aria-label', value)
  }

  get nextMonthAriaLabel(): string {
    return getAttribute(this, 'next-month-aria-label', '')
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

  #onPrevMonthClick = (e: Event) => {
    e.stopPropagation()
    decMonth(this.#uiDate!, this.#minDate!)

    this.#render()
  }

  #onNextMonthClick = (e: Event) => {
    e.stopPropagation()
    incMonth(this.#uiDate!, this.#maxDate!)

    this.#render()
  }

  #onPrevYearClick = (e: Event) => {
    e.stopPropagation()
    decYear(this.#uiDate!, this.#minDate!)

    this.#render()
  }

  #onNextYearClick = (e: Event) => {
    e.stopPropagation()
    incYear(this.#uiDate!, this.#maxDate!)

    this.#render()
  }

  #onDateMouseEnter = (e: Event) => {
    if (this.#date1 !== null && this.#date2 === null) {
      const hoverDateIso = getTargetAttribute(e, 'data-date')

      if (hoverDateIso === null) {
        return
      }

      const hoverDate = isoToDate(hoverDateIso)
      const todayDate = today()

      for (const week of this.#$days) {
        for (const $day of week) {
          if ($day.hasAttribute('disabled')) {
            continue
          }

          const dayDate = isoToDate($day.getAttribute('data-date')!)

          setClass($day, 'range', !areDatesEqual(todayDate, dayDate) && (isDateBetween(dayDate, this.#date1, hoverDate) || isDateBetween(dayDate, hoverDate, this.#date1)))
        }
      }
    }
  }

  #onDateClick = (e: Event) => {
    e.stopPropagation()

    // Firefox 110 breaks event target
    const dateIso = getTargetAttribute(e, 'data-date')

    if (dateIso === null || dateIso.length === 0) {
      return
    }

    if (this.range) {
      if (this.#date1 !== null && this.#date2 === null) {
        const date2 = isoToDate(dateIso)

        const dateTuple = sortDates([this.#date1, date2])
        const value = packCsv(dateTuple.map(dateToIso))

        this.#date1 = dateTuple[0]
        this.#date2 = dateTuple[1]

        this.#unsubscribeRangeHover()
        this.#render()

        this.dispatchEvent(
          new CustomEvent('-change', { detail: value })
        )

        return
      }

      this.#date1 = isoToDate(dateIso)
      this.#date2 = null

      this.#subscribeRangeHover()
      this.#render()

      return
    }

    // Single value mode
    this.dispatchEvent(
      new CustomEvent('-change', { detail: dateIso })
    )
  }

  #onValueChange() {
    const value = this.value

    setFormValue(this.#internals, this.value)

    this.#date1 = null
    this.#date2 = null

    if (this.range) {
      const isoDates = unpackCsv(value)

      if (isoDates.length === 2) {
        const date1 = isoToDate(isoDates[0])
        const date2 = isoToDate(isoDates[1])

        if (isValidDate(date1) && isValidDate(date2)) {
          [this.#date1, this.#date2] = sortDates([date1, date2])

          if (this.#uiDate === null || (!isDateOnScreen(this.#uiDate, date1) && !isDateOnScreen(this.#uiDate, date2))) {
            this.#uiDate = cloneDate(this.#date1)
          }
        } else {
          // goto today
          this.#uiDate = null
        }
      } else if (isoDates.length === 1) {
        const date1 = isoToDate(isoDates[0])

        if (isValidDate(date1)) {
          this.#uiDate = date1
        }
      }
    } else {
      // Single select mode
      const valueDate = isoToDate(value)

      if (isValidDate(valueDate)) {
        this.#date1 = valueDate
        this.#uiDate = cloneDate(this.#date1)
      } else {
        // goto today
        this.#uiDate = null
      }
    }

    if (this.#uiDate === null) {
      this.#uiDate = today()
    }

    // Dont show panel below min date
    if (this.#minDate !== null) {
      clampMinDate(this.#uiDate, this.#minDate)
    }

    // Dont show panel above max date
    if (this.#maxDate !== null) {
      clampMaxDate(this.#uiDate, this.#maxDate)
    }

    this.#render()
  }

  #render() {
    // Wait for all attributes initialize before first render
    if (this.#uiDate === null || this.#minDate === null || this.#maxDate === null || this.locale === null) {
      return
    }

    const todayDate = today()
    const month = getCalendarMonth(this.#uiDate)

    updateBooleanAttribute(this.#$prevMonth, 'disabled', canGoPrevMonth(this.#uiDate, this.#minDate) === false)
    updateBooleanAttribute(this.#$nextMonth, 'disabled', canGoNextMonth(this.#uiDate, this.#maxDate) === false)
    updateBooleanAttribute(this.#$prevYear, 'disabled', canGoPrevYear(this.#uiDate, this.#minDate) === false)
    updateBooleanAttribute(this.#$nextYear, 'disabled', canGoNextYear(this.#uiDate, this.#maxDate) === false)

    this.#$date.textContent = `${this.#monthNames[this.#uiDate.getUTCMonth()]} ${this.#uiDate.getUTCFullYear()}`

    for (let wi = 0; wi < this.#$days.length; wi++) {
      const $week = this.#$days[wi]
      let isEmptyWeek = true

      for (let di = 0; di < $week.length; di++) {
        const $day = $week[di]
        const week = month[wi]
        const day = week?.[di]

        $day.classList.remove('selected', 'range', 'today')

        if (day == null) {
          $day.textContent = ''
          $day.removeAttribute('data-date')
          $day.setAttribute('disabled', '')
          $day.setAttribute('aria-hidden', 'true')
        } else {
          const dayIso = dateToIso(day)

          $day.textContent = day.getUTCDate().toString()
          $day.setAttribute('data-date', dayIso)

          if (isDateBetween(day, this.#minDate, this.#maxDate)) {
            $day.removeAttribute('disabled')
            $day.removeAttribute('aria-hidden')
          } else {
            $day.setAttribute('disabled', '')
            $day.setAttribute('aria-hidden', 'true')
          }

          if (areDatesEqual(day, this.#date1) || areDatesEqual(day, this.#date2)) {
            $day.classList.add('selected')
          } else if (areDatesEqual(day, todayDate)) {
            $day.classList.add('today')
          } else if (isDateBetween(day, this.#date1, this.#date2)) {
            $day.classList.add('range')
          }

          isEmptyWeek = false
        }
      }

      setClass(this.#$weeks[wi], 'empty', isEmptyWeek)
    }
  }

  #subscribeRangeHover() {
    if (!this.#isHoverSubscribed) {
      this.#$month.addEventListener('mouseover', this.#onDateMouseEnter)
      this.#isHoverSubscribed = true
    }
  }

  #unsubscribeRangeHover() {
    if (this.#isHoverSubscribed) {
      this.#$month.removeEventListener('mouseover', this.#onDateMouseEnter)
      this.#isHoverSubscribed = false
    }
  }

  #onChangeReactHandler = (e: Event) => {
    getReactEventHandler(this, 'on-change')?.(e)
    getReactEventHandler(this, 'onChange')?.(e)
  }
}

defineCustomElement('sinch-date-picker', DatePicker)
