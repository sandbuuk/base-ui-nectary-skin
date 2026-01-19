import * as React from 'react'
import { useCallback, useMemo, useState } from 'react'
import { HorizontalLayout, PlaygroundEditor, PlaygroundHeader, VerticalLayout } from './components'
import { useKeyboardShortcuts, usePlaygroundLayout, usePreviewCompiler } from './hooks'
import { DEFAULT_CODE, EXAMPLES } from './utils/examples'
import { getCodeFromUrl, getShareableUrl } from './utils/url-codec'
import type { FC } from 'react'
import { useThemeName } from '~/context/theme-control'
import '@nectary/components/toast'
import '@nectary/components/toast-manager'
import './styles.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(window as any).React = React

export const PlaygroundPage: FC = () => {
  const { themeName } = useThemeName()
  const { layout, toggleLayout } = usePlaygroundLayout()

  const [code, setCode] = useState<string>(() => {
    const urlCode = getCodeFromUrl()

    return urlCode ?? DEFAULT_CODE
  })
  const [showCopiedToast, setShowCopiedToast] = useState(false)

  const themeClass = useMemo(
    () => (themeName === 'dark' ? 'nectary-theme-base nectary-theme-dark' : 'nectary-theme-base'),
    [themeName]
  )

  const { previewRefCallback, isCompiling, error } = usePreviewCompiler({
    code,
    themeClass,
  })

  const handleEditorChange = useCallback((value: string | undefined) => {
    setCode(value ?? '')
  }, [])

  const handleCopyUrl = useCallback(async () => {
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
    }
  }, [])

  const handleReset = useCallback(() => {
    setCode(DEFAULT_CODE)

    const url = new URL(window.location.href)

    url.searchParams.delete('code')
    window.history.replaceState({}, '', url.toString())
  }, [])

  useKeyboardShortcuts({
    onSave: () => void handleCopyUrl(),
    onReset: handleReset,
    onToggleLayout: toggleLayout,
  })

  const editorElement = (
    <PlaygroundEditor code={code} onChange={handleEditorChange}/>
  )

  return (
    <div className="playground-container">
      <PlaygroundHeader
        layout={layout}
        error={error}
        onLayoutToggle={toggleLayout}
        onReset={handleReset}
        onCopyUrl={() => void handleCopyUrl()}
        onExampleChange={handleExampleChange}
      />

      {layout === 'vertical' ? (
        <VerticalLayout
          editorElement={editorElement}
          error={error}
          previewRefCallback={previewRefCallback}
          isCompiling={isCompiling}
        />
      ) : (
        <HorizontalLayout
          editorElement={editorElement}
          previewRefCallback={previewRefCallback}
          isCompiling={isCompiling}
        />
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
