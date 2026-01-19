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
import '@nectary/components/accordion'
import '@nectary/components/accordion-item'
import '@nectary/components/action-menu'
import '@nectary/components/action-menu-option'
import '@nectary/components/button'
import '@nectary/components/icon'
import '@nectary/components/popover'
import '@nectary/components/title'
import '@nectary/components/toast'
import '@nectary/components/toast-manager'
import './styles.css'

loader.config({
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs',
  },
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(window as any).React = React

const configureMonaco = (monaco: Monaco): void => {
  // Define custom Nectary dark theme based on Nectary's design tokens
  monaco.editor.defineTheme('nectary-dark', {
    base: 'vs-dark',
    inherit: true,
    rules: [
      // Comments - muted neutral
      { token: 'comment', foreground: '808A91', fontStyle: 'italic' },
      { token: 'comment.block', foreground: '808A91', fontStyle: 'italic' },
      { token: 'comment.line', foreground: '808A91', fontStyle: 'italic' },

      // Keywords - tropical (primary brand color)
      { token: 'keyword', foreground: '51B8A6' },
      { token: 'keyword.control', foreground: '51B8A6' },
      { token: 'keyword.operator', foreground: 'C9D1D6' },

      // Strings - grass (green for success/strings)
      { token: 'string', foreground: '6FD56A' },
      { token: 'string.quoted', foreground: '6FD56A' },
      { token: 'string.template', foreground: '6FD56A' },

      // Numbers - pumpkin (warm accent)
      { token: 'number', foreground: 'FCA63F' },
      { token: 'constant.numeric', foreground: 'FCA63F' },

      // Types/Classes - ocean (blue)
      { token: 'type', foreground: '61ABFF' },
      { token: 'type.identifier', foreground: '61ABFF' },
      { token: 'entity.name.type', foreground: '61ABFF' },
      { token: 'support.type', foreground: '61ABFF' },

      // Functions - violet
      { token: 'entity.name.function', foreground: 'A89BFA' },
      { token: 'support.function', foreground: 'A89BFA' },

      // Variables - neutral light
      { token: 'variable', foreground: 'F7F9FA' },
      { token: 'variable.other', foreground: 'F7F9FA' },
      { token: 'identifier', foreground: 'F7F9FA' },

      // JSX/HTML tags - tropical
      { token: 'tag', foreground: '51B8A6' },
      { token: 'tag.html', foreground: '51B8A6' },
      { token: 'tag.xml', foreground: '51B8A6' },
      { token: 'metatag', foreground: '51B8A6' },

      // JSX attributes - ocean
      { token: 'attribute.name', foreground: '61ABFF' },
      { token: 'attribute.value', foreground: '6FD56A' },

      // Punctuation/Operators
      { token: 'delimiter', foreground: 'C9D1D6' },
      { token: 'delimiter.bracket', foreground: 'C9D1D6' },
      { token: 'operator', foreground: '51B8A6' },

      // Constants
      { token: 'constant', foreground: 'FCA63F' },
      { token: 'constant.language', foreground: 'EB83CF' },

      // Regex
      { token: 'regexp', foreground: 'EB83CF' },
    ],
    colors: {
      // Editor background - neutral 950 (very dark)
      'editor.background': '#14181C',
      // Foreground - neutral 50 (almost white)
      'editor.foreground': '#F7F9FA',
      // Line numbers - neutral 500
      'editorLineNumber.foreground': '#808A91',
      'editorLineNumber.activeForeground': '#C9D1D6',
      // Cursor - tropical 400
      'editorCursor.foreground': '#51B8A6',
      // Selection - tropical with transparency
      'editor.selectionBackground': '#06998B40',
      'editor.inactiveSelectionBackground': '#06998B20',
      // Line highlight
      'editor.lineHighlightBackground': '#1A212620',
      'editor.lineHighlightBorder': '#272F3680',
      // Gutter
      'editorGutter.background': '#14181C',
      // Scrollbar
      'scrollbarSlider.background': '#4B575E40',
      'scrollbarSlider.hoverBackground': '#4B575E80',
      'scrollbarSlider.activeBackground': '#4B575EA0',
      // Matching brackets - tropical
      'editorBracketMatch.background': '#06998B30',
      'editorBracketMatch.border': '#51B8A6',
      // Find match - pumpkin
      'editor.findMatchBackground': '#FCA63F40',
      'editor.findMatchHighlightBackground': '#FCA63F20',
      // Widget (autocomplete, hover)
      'editorWidget.background': '#1A2126',
      'editorWidget.border': '#4B575E',
      'editorSuggestWidget.background': '#1A2126',
      'editorSuggestWidget.border': '#4B575E',
      'editorSuggestWidget.selectedBackground': '#272F36',
      // Minimap
      'minimap.background': '#14181C',
    },
  })

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
  const [examplesOpen, setExamplesOpen] = useState(false)
  const [openPanels, setOpenPanels] = useState<string>('editor,preview')
  const [showCopiedToast, setShowCopiedToast] = useState(false)
  const [layout, setLayout] = useState<'vertical' | 'horizontal'>('horizontal')

  const isDarkTheme = themeName === 'dark'
  const themeClass = isDarkTheme ? 'nectary-theme-base nectary-theme-dark' : 'nectary-theme-base'

  // Re-attach shadow root when previewRef element changes (e.g., layout switch)
  useEffect(() => {
    if (previewRef.current !== null) {
      // Check if this element already has a shadow root
      if (previewRef.current.shadowRoot === null) {
        shadowRootRef.current = previewRef.current.attachShadow({ mode: 'open' })
      } else {
        shadowRootRef.current = previewRef.current.shadowRoot
      }
    }
  }, [layout])

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
  }, [code, themeClass, layout])

  const handleEditorChange = useCallback((value: string | undefined) => {
    setCode(value ?? '')
  }, [])

  const handleShare = useCallback(async () => {
    const url = getShareableUrl(code)

    window.history.replaceState({}, '', url)

    try {
      await navigator.clipboard.writeText(url)
      setShowCopiedToast(true)
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
    <div className="playground-container" data-layout={layout}>
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
          <sinch-button
            size="s"
            type="tertiary"
            aria-label={layout === 'vertical' ? 'Switch to horizontal layout' : 'Switch to vertical layout'}
            on-click={() => setLayout((l) => (l === 'vertical' ? 'horizontal' : 'vertical'))}
          >
            <sinch-icon slot="icon" icons-version="2" name={layout === 'vertical' ? 'fa-table-columns' : 'fa-table-rows'}/>
          </sinch-button>
          <sinch-button size="s" type="secondary" text="Reset" aria-label="Reset code" on-click={handleReset}/>
          <sinch-button size="s" type="cta-primary" text="Share" aria-label="Share code" on-click={handleShare}>
            <sinch-icon slot="icon" icons-version="2" name="fa-share-nodes"/>
          </sinch-button>
        </div>
      </header>

      {layout === 'vertical' ? (
        <sinch-accordion
          multiple
          value={openPanels}
          on-change={(e: CustomEvent<string>) => setOpenPanels(e.detail)}
          class="playground-accordion"
        >
          <sinch-accordion-item value="editor" label="JSX">
            {error !== null && (
              <span slot="icon" className="playground-error-indicator">Error</span>
            )}
            <div slot="content" className="playground-editor-content">
              <Editor
                height="100%"
                language="typescript"
                path="playground.tsx"
                value={code}
                onChange={handleEditorChange}
                beforeMount={configureMonaco}
                theme="nectary-dark"
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
          </sinch-accordion-item>
          <sinch-accordion-item value="preview" label="Preview">
            <div slot="content" className="playground-preview-content">
              <div ref={previewRef} className="playground-preview-shadow-host"/>
            </div>
          </sinch-accordion-item>
        </sinch-accordion>
      ) : (
        <div className="playground-horizontal-layout">
          <div className="playground-horizontal-editor">
            <Editor
              height="100%"
              language="typescript"
              path="playground.tsx"
              value={code}
              onChange={handleEditorChange}
              beforeMount={configureMonaco}
              theme="nectary-dark"
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
          <div className="playground-horizontal-preview">
            <div ref={previewRef} className="playground-preview-shadow-host"/>
          </div>
        </div>
      )}

      <sinch-toast-manager origin="bottom-right">
        {showCopiedToast && (
          <sinch-toast
            type="success"
            text="URL copied to clipboard"
            on-timeout={() => setShowCopiedToast(false)}
          />
        )}
      </sinch-toast-manager>
    </div>
  )
}
