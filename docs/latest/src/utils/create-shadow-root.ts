export const createShadowRoot = (element: HTMLElement, registry: CustomElementRegistry) => {
  const shadowRoot = element.attachShadow({
    mode: 'open',
    customElements: registry,
  })

  const appElement = document.createElement('div')

  appElement.id = 'page'
  shadowRoot.appendChild(appElement)

  Object.defineProperty(appElement, 'ownerDocument', { value: shadowRoot })
  Object.defineProperty(shadowRoot, 'createTextNode', {
    value: document.createTextNode.bind(shadowRoot.ownerDocument),
  })
  Object.defineProperty(shadowRoot, 'createElementNS', {
    value: document.createElementNS.bind(shadowRoot.ownerDocument),
  })

  return { appElement, shadowRoot }
}
