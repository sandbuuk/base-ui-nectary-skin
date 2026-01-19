export const LAYOUT_STORAGE_KEY = 'nectary-playground-layout'

export const PREVIEW_STYLES = `
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }
  .preview-wrapper {
    padding: 16px;
    min-height: 100%;
    background: var(--nectary-surface-primary, #fff);
    color: var(--nectary-text-primary, #1a1a1a);
    font-family: var(--nectary-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
  }
  .error-message {
    color: var(--nectary-text-error, #dc2626);
    background: var(--nectary-surface-error, #fef2f2);
    padding: 12px;
    border-radius: 8px;
    font-family: monospace;
    white-space: pre-wrap;
  }
`

export const editorOptions = {
  minimap: { enabled: false },
  fontSize: 14,
  lineNumbers: 'on' as const,
  scrollBeyondLastLine: false,
  automaticLayout: true,
  tabSize: 2,
  wordWrap: 'on' as const,
  padding: { top: 8 },
}
