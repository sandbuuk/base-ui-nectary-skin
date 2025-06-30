// Import required dependencies for the Tabs component
import { For } from 'solid-js' // SolidJS list component for rendering arrays
import html from 'solid-js/html' // HTML template literal for SolidJS
import type { Accessor } from 'solid-js' // TypeScript type for SolidJS accessors

// CSS styles for the Tabs component
// This styles the tab navigation with active state highlighting
const style = `
.tabs {
  --highlight-color: var(--sinch-sys-color-text-default);
  display: flex;

  & > button {
    flex: 1;
    padding-block-end: 10px;
    border-block-end: 2px solid transparent;
    outline: none;
    background: transparent;
    color: var(--sinch-sys-color-text-disabled);
    font: var(--sinch-sys-font-desktop-title-xs);

    &.active {
      color: var(--sinch-sys-color-primary-default);
      border-block-end: 2px solid var(--highlight-color);
    }
  }
}
`

/**
 * Tabs component - renders the navigation tabs for switching between Info and Options views
 * Uses the brand color for the active tab highlight
 */
export const Tabs = (props: {
  color?: string, // Brand color for active tab highlighting
  tab: number, // Currently active tab index (0 = Info, 1 = Options)
  onTab?: (t: number) => void, // Callback when tab is clicked
}) => html`
  <style>
    ${style}
  </style>
  <section class="tabs" style=${() => ({ '--highlight-color': props.color })}>
    <!-- Render tab buttons for "Info" and "Options" -->
    <${For} each=${['Info', 'Options']}>
      ${(label: string, i: Accessor<number>) => html`
        <button
          class=${() => (i() === props.tab ? 'active' : '')}
          on:click=${() => props.onTab?.(i())}
        >
          ${label}
        </button>
      `}
    <//>
  </section>
`
