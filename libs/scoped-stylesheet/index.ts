
/**
 * Helper function to make it easier to add Global styles to a shadow root.
 *
 * Takes in a  shadow root and returns a function that takes in a string of styles to be added instide it.
 */
export class ScopedStyleSheet {
  constructor(private shadowRoot: ShadowRoot) {}

  addStyle(styles: string) {
    const style = document.createElement('style')

    style.textContent = styles
    this.shadowRoot.appendChild(style)
  }
}
