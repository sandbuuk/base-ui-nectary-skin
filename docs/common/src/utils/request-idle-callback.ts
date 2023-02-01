export const requestIdleCallback = (cb: () => void) => {
  const id = (global.requestIdleCallback ?? global.setTimeout)(cb)

  return () => {
    (global.cancelIdleCallback ?? global.clearTimeout)(id)
  }
}
