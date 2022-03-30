import { defineNectaryElements } from '@sinch-engage/nectary/utils'
import { StrictMode } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { StyleSheetManager } from 'styled-components'
import { App } from './App'

const appName = 'sinch-quickstarts-app'
const customRegistry = new CustomElementRegistry()

defineNectaryElements(customRegistry)

// Having this defined outside of `mount()` will make sure it does
// not contain its scope if it happens to hang around in the host app.
const createUnmounter = (element: HTMLElement | ShadowRoot) => () => {
  unmountComponentAtNode(element)
}

// TODO: This type should be in a common package provided by core team.
type MFERenderFunc = (element: HTMLDivElement, x: {basePath: string}) => undefined | (() => void)

const mount: MFERenderFunc = (element: HTMLDivElement, { basePath }) => {
  const shadow = element.attachShadow({
    mode: 'open',
    // @ts-ignore Set custom registry for the shadowroot.
    customElements: customRegistry,
  })

  // StyleLoader style inject
  const stylesFrag = (document.head as any)[appName]

  if (stylesFrag != null) {
    shadow.appendChild(stylesFrag.cloneNode(true))
  }

  const appElement = shadow.appendChild(document.createElement('div'))

  Object.defineProperty(appElement, 'ownerDocument', { value: shadow })

  render(
    // Make sure styled-components insert the styles inside the Shadow DOM.
    // @ts-expect-error Mute error until StyleSheetManager allows ShadowRoot
    // type for the target.
    <StyleSheetManager target={shadow}>
      <StrictMode>
        <App basePath={basePath}/>
      </StrictMode>
    </StyleSheetManager>,
    appElement
  )

  return createUnmounter(appElement)
}

export default mount
