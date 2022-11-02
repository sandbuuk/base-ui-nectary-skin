type TTooltipStateOptions = {
  showDelay: number,
  hideDelay: number,
  hideAnimationDuration: number,
  onShow(): void,
  onHideStart(): void,
  onHideEnd(): void,
}

type TTooltipState = 'initial' | 'show-delay' | 'show' | 'hide-delay' | 'hide'

export class TooltipState {
  #timerId: number | null = null
  #state: TTooltipState = 'initial'
  #options: TTooltipStateOptions

  constructor(options: TTooltipStateOptions) {
    this.#options = options
  }

  show() {
    switch (this.#state) {
      case 'initial': {
        this.#delayShow()

        break
      }
      case 'hide-delay': {
        this.#cancelStateChange('show')

        break
      }
      case 'hide': {
        this.#cancelStateChange()
        this.#onShow()

        break
      }
    }
  }

  hide() {
    switch (this.#state) {
      case 'show-delay': {
        this.#cancelStateChange('initial')

        break
      }
      case 'show': {
        this.#delayHide()

        break
      }
    }
  }

  interrupt() {
    switch (this.#state) {
      case 'show-delay': {
        this.#cancelStateChange('initial')

        break
      }
      case 'show': {
        this.#onHideStart()

        break
      }
      case 'hide-delay': {
        this.#cancelStateChange()
        this.#onHideStart()

        break
      }
    }
  }

  destroy() {
    switch (this.#state) {
      case 'show-delay': {
        this.#cancelStateChange('initial')

        break
      }
      case 'show': {
        this.#onHideStart(true)

        break
      }
      case 'hide-delay': {
        this.#cancelStateChange()
        this.#onHideStart(true)

        break
      }
      case 'hide': {
        this.#cancelStateChange()
        this.#onHideEnd()

        break
      }
    }
  }

  #delayShow() {
    this.#state = 'show-delay'
    this.#timerId = window.setTimeout(this.#onShow, this.#options.showDelay)
  }

  #delayHide() {
    this.#state = 'hide-delay'
    this.#timerId = window.setTimeout(this.#onHideStart, this.#options.hideDelay)
  }

  #onShow = () => {
    this.#state = 'show'
    this.#options.onShow()
  }

  #onHideStart = (isImmediate?: boolean) => {
    this.#state = 'hide'
    this.#options.onHideStart()

    if (isImmediate === true || this.#options.hideAnimationDuration === 0) {
      this.#onHideEnd()
    } else {
      this.#timerId = window.setTimeout(this.#onHideEnd, this.#options.hideAnimationDuration)
    }
  }

  #onHideEnd = () => {
    this.#state = 'initial'
    this.#options.onHideEnd()
  }

  #cancelStateChange(nextState?: TTooltipState) {
    if (nextState != null) {
      this.#state = nextState
    }

    if (this.#timerId !== null) {
      clearTimeout(this.#timerId)
      this.#timerId = null
    }
  }
}
