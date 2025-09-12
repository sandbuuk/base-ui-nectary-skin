import { getTargetByAttribute } from './event-target'

function getActualActiveElement(): Element | null {
  let activeElement = document.activeElement

  while ((activeElement?.shadowRoot?.activeElement) != null) {
    activeElement = activeElement.shadowRoot.activeElement
  }

  return activeElement
}

export function createKeyboardNavigation() {
  return {
    navigateToNextOption(enabledOptions: Element[], forward: boolean) {
      const optionsLength = enabledOptions.length

      if (optionsLength === 0) {
        return
      }

      const currentIndex = enabledOptions.findIndex((option) =>
        option === getActualActiveElement())

      let nextIndex: number

      if (currentIndex !== -1) {
        if (forward) {
          nextIndex = (currentIndex + 1) % optionsLength
        } else {
          nextIndex = currentIndex === 0 ? optionsLength - 1 : currentIndex - 1
        }
      } else {
        nextIndex = forward ? 0 : optionsLength - 1
      }

      this.navigateToOption(enabledOptions, nextIndex)
    },

    navigateToOption(enabledOptions: Element[], index: number) {
      const optionsLength = enabledOptions.length

      if (enabledOptions.length === 0 || index < 0 || index >= optionsLength) {
        return
      }

      const option = enabledOptions[index] as HTMLElement

      option.focus()
    },

    handleKeyboardNavigation(e: KeyboardEvent, enabledOptions: Element[]) {
      switch (e.code) {
        case 'Space':
        case 'Enter': {
          e.preventDefault()

          const target = getTargetByAttribute(e, 'value')

          if (target !== null) {
            target.click()
          }

          break
        }
        case 'ArrowLeft':
        case 'ArrowRight': {
          e.preventDefault()
          this.navigateToNextOption(enabledOptions, e.code === 'ArrowRight')

          break
        }
        case 'Home': {
          e.preventDefault()
          this.navigateToOption(enabledOptions, 0)

          break
        }
        case 'End': {
          e.preventDefault()
          this.navigateToOption(enabledOptions, enabledOptions.length - 1)

          break
        }
      }
    },
  }
}
