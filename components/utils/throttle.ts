const createThrottle = (delayFn: (cb: () => void) => any, cancelFn: (id: any) => void) =>
  (cb: () => void) => {
    let id: any = null

    const delayCallback = () => {
      id = null

      cb()
    }

    return {
      fn: () => {
        if (id === null) {
          id = delayFn(delayCallback)
        }
      },
      cancel: () => {
        if (id !== null) {
          cancelFn(id)
        }
      },
    }
  }

export const throttleAnimationFrame = createThrottle(global.requestAnimationFrame, global.cancelAnimationFrame)
