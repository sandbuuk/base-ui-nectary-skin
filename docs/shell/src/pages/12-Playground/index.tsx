import * as Babel from '@babel/standalone'
import Editor, { type Monaco, loader } from '@monaco-editor/react'
import * as React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import * as ReactDOM from 'react-dom/client'
import { importComponents } from './utils/auto-import'
import { DEFAULT_CODE, EXAMPLES } from './utils/examples'
import { decodeCode, getShareableUrl } from './utils/url-codec'
import type { FC } from 'react'
import { useThemeName } from '~/context/theme-control'
// Only import components used by the playground UI itself
import '@nectary/components/action-menu'
import '@nectary/components/action-menu-option'
import '@nectary/components/button'
import '@nectary/components/icon'
import '@nectary/components/popover'
import '@nectary/components/title'
import './styles.css'

loader.config({
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs',
  },
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(window as any).React = React

const configureMonaco = (monaco: Monaco): void => {
  // Configure TypeScript compiler options for JSX syntax highlighting
  monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ESNext,
    module: monaco.languages.typescript.ModuleKind.ESNext,
    jsx: monaco.languages.typescript.JsxEmit.React,
    jsxFactory: 'React.createElement',
    jsxFragmentFactory: 'React.Fragment',
    allowNonTsExtensions: true,
    allowJs: true,
    strict: false,
    noEmit: true,
    esModuleInterop: true,
    skipLibCheck: true,
  })

  // Disable type checking - the playground provides JSX syntax highlighting
  // but full type checking would require bundled .d.ts files for Nectary components
  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: true,
    noSyntaxValidation: false,
  })
}

const PREVIEW_STYLES = `
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

export const PlaygroundPage: FC = () => {
  const { themeName } = useThemeName()
  const previewRef = useRef<HTMLDivElement>(null)
  const shadowRootRef = useRef<ShadowRoot | null>(null)

  const [code, setCode] = useState<string>(() => {
    const urlCode = decodeCode(new URLSearchParams(window.location.search).get('code') ?? '')

    return urlCode ?? DEFAULT_CODE
  })
  const [error, setError] = useState<string | null>(null)
  const [showToast, setShowToast] = useState(false)
  const [examplesOpen, setExamplesOpen] = useState(false)

  const isDarkTheme = themeName === 'dark'
  const themeClass = isDarkTheme ? 'nectary-theme-base nectary-theme-dark' : 'nectary-theme-base'

  useEffect(() => {
    if (previewRef.current !== null && shadowRootRef.current === null) {
      shadowRootRef.current = previewRef.current.attachShadow({ mode: 'open' })
    }
  }, [])

  useEffect(() => {
    const shadowRoot = shadowRootRef.current

    if (shadowRoot === null) {
      return
    }

    let currentRoot: ReactDOM.Root | null = null
    let cancelled = false

    // Debounce the compilation to avoid errors while typing
    const timeoutId = setTimeout(() => {
      if (cancelled) {
        return
      }

      // First, dynamically import any sinch-* components used in the code
      void importComponents(code).then(() => {
        if (cancelled) {
          return
        }

        try {
          const compiled = Babel.transform(code, {
            presets: ['react'],
            filename: 'playground.tsx',
          })

          if (compiled.code == null) {
            throw new Error('Compilation failed')
          }

          shadowRoot.innerHTML = `
            <style>${PREVIEW_STYLES}</style>
            <div class="preview-wrapper ${themeClass}">
              <div id="react-root"></div>
            </div>
          `

          const mountPoint = shadowRoot.getElementById('react-root')

          if (mountPoint === null) {
            throw new Error('Could not find mount point')
          }

          // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
          const createComponent = new Function('React', `
            ${compiled.code}
            return typeof App !== 'undefined' ? App : null;
          `)

          const AppComponent = createComponent(React)

          if (AppComponent === null) {
            throw new Error('No App component found. Define a function called "App" that returns JSX.')
          }

          currentRoot = ReactDOM.createRoot(mountPoint)
          currentRoot.render(React.createElement(AppComponent))
          setError(null)

          // Update URL with encoded code
          const url = getShareableUrl(code)

          window.history.replaceState({}, '', url)
        } catch (err) {
          const errorMessage = err instanceof Error ? err.message : 'Unknown error'

          setError(errorMessage)

          shadowRoot.innerHTML = `
            <style>${PREVIEW_STYLES}</style>
            <div class="preview-wrapper ${themeClass}">
              <div class="error-message">Error: ${errorMessage}</div>
            </div>
          `
        }
      })
    }, 300)

    // Cleanup function - unmount when effect re-runs or component unmounts
    return () => {
      cancelled = true
      clearTimeout(timeoutId)

      if (currentRoot !== null) {
        currentRoot.unmount()
      }
    }
  }, [code, themeClass])

  const handleEditorChange = useCallback((value: string | undefined) => {
    setCode(value ?? '')
  }, [])

  const handleShare = useCallback(async () => {
    const url = getShareableUrl(code)

    window.history.replaceState({}, '', url)

    try {
      await navigator.clipboard.writeText(url)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
    } catch (err) {
      console.error('Failed to copy URL:', err)
    }
  }, [code])

  const handleExampleChange = useCallback((example: string) => {
    if (example !== '' && EXAMPLES[example] !== undefined) {
      setCode(EXAMPLES[example])
      setExamplesOpen(false)
    }
  }, [])

  const handleReset = useCallback(() => {
    setCode(DEFAULT_CODE)
    setError(null)

    const url = new URL(window.location.href)

    url.searchParams.delete('code')
    window.history.replaceState({}, '', url.toString())
  }, [])

  return (
    <div className="playground-container">
      <header className="playground-header">
        <div className="playground-header-left">
          <sinch-title text="Playground" type="m" level="1"/>
          <sinch-popover
            open={examplesOpen}
            orientation="bottom-left"
            on-close={() => setExamplesOpen(false)}
            aria-label="Examples menu"
          >
            <sinch-button
              slot="target"
              type="secondary"
              text="Load example..."
              aria-label="Load example"
              on-click={() => setExamplesOpen((v) => !v)}
              size="s"
            >
              <sinch-icon slot="icon-right" icons-version="2" name="fa-chevron-down"/>
            </sinch-button>
            <sinch-action-menu slot="content" aria-label="Examples">
              {Object.keys(EXAMPLES).map((name) => (
                <sinch-action-menu-option
                  key={name}
                  text={name}
                  aria-label={name}
                  on-click={() => handleExampleChange(name)}
                />
              ))}
            </sinch-action-menu>
          </sinch-popover>
        </div>
        <div className="playground-header-right">
          <sinch-button size="s" type="secondary" text="Reset" aria-label="Reset code" on-click={handleReset}/>
          <sinch-button size="s" type="cta-primary" text="Share" aria-label="Share code" on-click={handleShare}>
            <sinch-icon slot="icon" icons-version="2" name="fa-share-nodes"/>
          </sinch-button>
        </div>
      </header>

      <div className="playground-editor-pane">
        <div className="playground-editor-header">
          <sinch-title text="JSX" type="xs" level="2"/>
          {error !== null && <span className="playground-error-indicator">Error</span>}
        </div>
        <div className="playground-editor-content">
          <Editor
            height="100%"
            language="typescript"
            path="playground.tsx"
            value={code}
            onChange={handleEditorChange}
            beforeMount={configureMonaco}
            theme={'vs-black'}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              scrollBeyondLastLine: false,
              automaticLayout: true,
              tabSize: 2,
              wordWrap: 'on',
              padding: { top: 8 },
            }}
          />
        </div>
      </div>

      <div className="playground-preview-pane">
        <div className="playground-preview-header">
          <sinch-title text="Preview" type="xs" level="2"/>
        </div>
        <div className="playground-preview-content">
          <div ref={previewRef} className="playground-preview-shadow-host"/>
        </div>
      </div>
    </div>
  )
}
