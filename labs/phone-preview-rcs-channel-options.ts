// Import required dependencies for the Options component
import html from 'solid-js/html' // HTML template literal for SolidJS

// CSS styles for the Options component
// This styles the settings/options view with buttons and separators
const style = `
.options {
  display: flex;
  flex-flow: column;
  font: var(--sinch-sys-font-body-xs);

  & > header {
    padding-block-end: 8px;
  }

  & > span {
    font: var(--sinch-sys-font-body-xxs);
  }

  & > button {
    padding: 4px;
    outline: none;
    background: transparent;
    text-align: start;
  }

  & > hr {
    border-color: var(--sinch-sys-color-surface-secondary-active);
  }
}
`

/**
 * Options component - renders the settings/options view
 * This shows typical RCS channel options like notifications, spam reporting, and legal links
 * Currently static content representing common RCS channel features
 */
export const Options = () => html`
  <style>
    ${style}
  </style>
  <section class="options">
    <header>Notifications</header>
    <span>Business</span>
    <button>Block & report spam</button>
    <hr />
    <button>View Privacy Policy</button>
    <hr />
    <button>View Terms of Service</button>
    <hr />
    <button>Learn mode</button>
  </section>
`
