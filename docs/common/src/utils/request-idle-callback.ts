export const requestIdleCallback = (cb: () => void) => {
  const id = (globalThis.requestIdleCallback ?? globalThis.setTimeout)(cb)

  return () => {
    (globalThis.cancelIdleCallback ?? globalThis.clearTimeout)(id)
  }
}
