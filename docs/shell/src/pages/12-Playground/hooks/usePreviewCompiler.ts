import * as Babel from '@babel/standalone'
import * as React from 'react'
import { useEffect, useCallback, useState } from 'react'
import * as ReactDOM from 'react-dom/client'
import { PREVIEW_STYLES } from '../config/constants'
import { importComponents } from '../utils/auto-import'
import { getShareableUrl } from '../utils/url-codec'

interface UsePreviewCompilerOptions {
  code: string,
  themeClass: string,
}

interface UsePreviewCompilerResult {
  previewRefCallback: (node: HTMLDivElement | null) => void,
  isCompiling: boolean,
  error: string | null,
}

export const usePreviewCompiler = ({
  code,
  themeClass,
}: UsePreviewCompilerOptions): UsePreviewCompilerResult => {
  const [shadowRoot, setShadowRoot] = useState<ShadowRoot | null>(null)
  const [isCompiling, setIsCompiling] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const previewRefCallback = useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      const root = node.shadowRoot ?? node.attachShadow({ mode: 'open' })

      setShadowRoot(root)
    } else {
      setShadowRoot(null)
    }
  }, [])

  useEffect(() => {
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

      setIsCompiling(true)
      setError(null)

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
          setIsCompiling(false)

          // Update URL with encoded code
          const url = getShareableUrl(code)

          window.history.replaceState({}, '', url)
        } catch (err) {
          const errorMessage = err instanceof Error ? err.message : 'Unknown error'

          setError(errorMessage)
          setIsCompiling(false)

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
  }, [code, themeClass, shadowRoot])

  return {
    previewRefCallback,
    isCompiling,
    error,
  }
}
