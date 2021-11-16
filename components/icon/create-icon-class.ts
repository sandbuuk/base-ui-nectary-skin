const DEFAULT_SIZE = 16

export const createIconClass = (templateHTML: string) => {
  const template = document.createElement('template')

  template.innerHTML = templateHTML

  return class extends HTMLElement {
    $svg: SVGElement

    constructor() {
      super()

      const shadowRoot = this.attachShadow({ mode: 'closed' })

      shadowRoot.appendChild(template.content.cloneNode(true))

      this.$svg = shadowRoot.querySelector('svg')!
    }

    static get observedAttributes() {
      return ['size']
    }

    set size(value: number | undefined) {
      if (Number.isInteger(value)) {
        this.setAttribute('size', String(value))
      } else {
        this.removeAttribute('size')
      }
    }

    get size(): number {
      return Number(this.getAttribute('size')) ?? DEFAULT_SIZE
    }

    connectedCallback() {
      if (!this.$svg.hasAttribute('preserveAspectRatio')) {
        this.$svg.setAttribute('preserveAspectRatio', 'xMinYMin meet')
      }

      if (!this.hasAttribute('size')) {
        this.size = DEFAULT_SIZE
      }
    }

    attributeChangedCallback(name: string, _: string, newVal: string | null) {
      switch (name) {
        case 'size': {
          this.$svg.setAttribute(
            'width',
            (newVal !== null && Number.isInteger(Number(newVal)))
              ? newVal
              : String(DEFAULT_SIZE)
          )

          break
        }
      }
    }
  }
}

export type TSinchIcon = {
  size?: number,
}
