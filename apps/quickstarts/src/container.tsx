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

const mount = (element: HTMLElement | ShadowRoot) => {
  // StyleLoader style inject
  const stylesFrag = (document.head as any)[appName]
  const appElement = document.createElement('div')

  if (stylesFrag != null) {
    element.appendChild(stylesFrag.cloneNode(true))
  }

  element.appendChild(appElement)

  //Object.defineProperty(this.appElement, 'ownerDocument', { value: shadowRoot })

  // TODO: This basename should really come from the shell.
  // The shell decides where to mount it.
  // Maybe take an extra argument to "render"?
  render(
    <StrictMode>
      {/* Make sure styled-components insert the styles inside the Shadow DOM. */}
      <StyleSheetManager target={element as HTMLElement}>
        <App baseUrl="/quick-starts"/>
      </StyleSheetManager>
    </StrictMode>,
    appElement
  )

  return createUnmounter(appElement)
}

export default mount
