type TTooltipStateOptions = {
  isOpened?: boolean,
  showDelay: number,
  hideDelay: number,
  hideAnimationDuration: number,
  onShowStart(): void,
  onShowEnd(): void,
  onHideStart(): void,
  onHideEnd(): void,
}

type TTooltipState = 'hide' | 'hide-to-show' | 'show' | 'show-to-hide'

export class TooltipState {
  #timerId: number | null = null
  #state: TTooltipState = 'hide'
  #options: TTooltipStateOptions

  constructor(options: TTooltipStateOptions) {
    this.#options = options
  }

  updateOptions(options: Partial<TTooltipStateOptions>) {
    this.#options = {
      ...this.#options,
      ...options,
    }
  }

  show() {
    if (this.#options.isOpened === false) {
      return
    }

    switch (this.#state) {
      case 'hide': {
        this.#switchToHideToShow()

        break
      }
      case 'show-to-hide': {
        this.#switchToState('show')

        break
      }
    }
  }

  hide() {
    if (this.#options.isOpened === true) {
      return
    }

    switch (this.#state) {
      case 'hide-to-show': {
        this.#onHideAnimationEnd()

        break
      }
      case 'show': {
        this.#switchToShowToHide()

        break
      }
    }
  }

  interrupt() {
    switch (this.#state) {
      case 'hide-to-show': {
        this.#onHideAnimationEnd()

        break
      }
      case 'show': {
        this.#switchToShowToHide(true, false)

        break
      }
      case 'show-to-hide': {
        this.#switchToShowToHide(true, false)

        break
      }
    }
  }

  destroy() {
    switch (this.#state) {
      case 'hide-to-show': {
        this.#onHideAnimationEnd()

        break
      }
      case 'show': {
        this.#switchToShowToHide(true, true)

        break
      }
      case 'show-to-hide': {
        this.#switchToShowToHide(true, true)

        break
      }
      case 'hide': {
        this.#onHideAnimationEnd()

        break
      }
    }
  }

  #switchToHideToShow() {
    this.#switchToState('hide-to-show')
    this.#options.onShowStart()

    if (this.#options.showDelay === 0) {
      this.#onSwitchToShow()
    } else if (this.#options.isOpened !== undefined) {
      this.#timerId = window.setTimeout(this.#onSwitchToShow, 100)
    } else {
      this.#timerId = window.setTimeout(this.#onSwitchToShow, this.#options.showDelay)
    }
  }

  #switchToShowToHide(skipDelay?: boolean, skipHideAnimation?: boolean) {
    this.#switchToState('show-to-hide')

    if (skipDelay === true || this.#options.hideDelay === 0 || this.#options.isOpened !== undefined) {
      this.#onShowToHideEnd(skipHideAnimation)
    } else {
      this.#timerId = window.setTimeout(this.#onShowToHideEnd, this.#options.hideDelay)
    }
  }

  #onSwitchToShow = () => {
    this.#switchToState('show')
    this.#options.onShowEnd()
  }

  #onShowToHideEnd = (skipHideAnimation?: boolean) => {
    this.#switchToState('hide')
    this.#options.onHideStart()

    if (skipHideAnimation === true || this.#options.hideAnimationDuration === 0) {
      this.#onHideAnimationEnd()
    } else {
      this.#timerId = window.setTimeout(this.#onHideAnimationEnd, this.#options.hideAnimationDuration)
    }
  }

  #onHideAnimationEnd = () => {
    this.#switchToState('hide')
    this.#options.onHideEnd()
  }

  #switchToState(nextState: TTooltipState) {
    this.#state = nextState

    if (this.#timerId !== null) {
      clearTimeout(this.#timerId)
      this.#timerId = null
    }
  }
}
