import { useEffect } from 'react'

/**
 * Hook to lock body scroll when active.
 * Saves and restores the original overflow value on cleanup.
 *
 * @param active - Whether scroll lock should be active
 */
export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) {
      return
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [active])
}
