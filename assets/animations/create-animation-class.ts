import lottie from 'lottie-web'
import { attrValueToPixels, getBooleanAttribute, getIntegerAttribute, getLiteralAttribute, NectaryElement, updateAttribute, updateBooleanAttribute, updateLiteralAttribute } from '../utils'
import templateHTML from './template.html?raw'
import type { TSinchAnimationDirection } from './types'
import type { AnimationConfigWithData, AnimationItem } from 'lottie-web'

const animationDirectionValues: readonly TSinchAnimationDirection[] = ['forward', 'backward']

export const createAnimationClass = (animationData: object): CustomElementConstructor => {
  const template = document.createElement('template')

  template.innerHTML = templateHTML

  return class extends NectaryElement {
    #$wrapper: HTMLElement
    #anim: AnimationItem | null = null
    constructor() {
      super()

      const shadowRoot = this.attachShadow()

      shadowRoot.appendChild(template.content.cloneNode(true))

      this.#$wrapper = shadowRoot.querySelector('#wrapper')!
    }

    connectedCallback() {
      const config: AnimationConfigWithData = {
        container: this.#$wrapper,
        renderer: 'svg',
        loop: this.loop,
        autoplay: this.autoplay,
        rendererSettings: {
          // @ts-expect-error
          id: 'svg',
          progressiveLoad: true,
          preserveAspectRatio: 'xMidYMid meet',
          imagePreserveAspectRatio: 'xMidYMid meet',
        },
        animationData,
      }

      this.#anim = lottie.loadAnimation(config)
      this.#anim.setSubframe(false)
      this.#updateDirection()
    }

    disconnectedCallback() {
      this.#anim?.destroy()
      this.#anim = null
    }

    static get observedAttributes() {
      return ['size']
    }

    attributeChangedCallback(name: string, _: string | null, newVal: string | null) {
      switch (name) {
        case 'size': {
          this.#$wrapper.style.setProperty('height', attrValueToPixels(newVal))

          break
        }
        case 'direction': {
          this.#updateDirection()

          break
        }
        case 'loop': {
          this.#updateLoop()

          break
        }
      }
    }

    set size(value: number | null) {
      updateAttribute(this, 'size', value)
    }

    get size() {
      return getIntegerAttribute(this, 'size', null)
    }

    set loop(isEnabled: boolean) {
      updateBooleanAttribute(this, 'loop', isEnabled)
    }

    get loop() {
      return getBooleanAttribute(this, 'loop')
    }

    set autoplay(isEnabled: boolean) {
      updateBooleanAttribute(this, 'autoplay', isEnabled)
    }

    get autoplay() {
      return getBooleanAttribute(this, 'autoplay')
    }

    set direction(value: TSinchAnimationDirection) {
      updateLiteralAttribute(this, animationDirectionValues, 'direction', value)
    }

    get direction(): TSinchAnimationDirection {
      return getLiteralAttribute(this, animationDirectionValues, 'direction', 'forward')
    }

    play() {
      this.#anim?.play()
    }

    stop() {
      this.#anim?.stop()
    }

    pause() {
      this.#anim?.pause()
    }

    #updateDirection() {
      this.#anim?.setDirection(this.direction === 'forward' ? 1 : -1)
    }

    #updateLoop() {
      this.#anim?.setLoop(this.loop)
    }
  }
}
