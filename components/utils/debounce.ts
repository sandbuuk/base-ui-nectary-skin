const createDebounce = (delayFn: (cb: () => void) => any, cancelFn: (id: any) => void) =>
  (cb: () => void) => {
    let id: any = null

    const delayCallback = () => {
      id = null

      cb()
    }

    return {
      fn: () => {
        if (id !== null) {
          cancelFn(id)
        }

        id = delayFn(delayCallback)
      },
      cancel: () => {
        if (id !== null) {
          cancelFn(id)
        }
      },
    }
  }

export const debounceTimeout = (ms: number) => createDebounce((cb) => global.setTimeout(cb, ms), global.clearTimeout)
