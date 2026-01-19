import { useEffect } from 'react'

interface KeyboardShortcutHandlers {
  onSave: () => void,
  onReset: () => void,
  onToggleLayout: () => void,
}

export const useKeyboardShortcuts = ({
  onSave,
  onReset,
  onToggleLayout,
}: KeyboardShortcutHandlers): void => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMod = e.metaKey || e.ctrlKey

      if (isMod && e.key === 's') {
        e.preventDefault()
        onSave()
      } else if (isMod && e.key === 'r') {
        e.preventDefault()
        onReset()
      } else if (isMod && e.key === 'l') {
        e.preventDefault()
        onToggleLayout()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onSave, onReset, onToggleLayout])
}
