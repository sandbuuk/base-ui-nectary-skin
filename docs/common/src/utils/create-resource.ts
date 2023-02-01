type TPromiseStatus = 0 | 1 | 2

export type TResource<T> = {
  read(): T,
}

export const createResource = <T>(promise: Promise<T>): TResource<T> => {
  let status: TPromiseStatus = 0
  let response: T
  let error: any

  const suspender = promise.then(
    (res) => {
      status = 1
      response = res
    },
    (err) => {
      status = 2
      error = err
    }
  )

  const read = (): T => {
    switch (status) {
      case 0:
        throw suspender
      case 2:
        throw error
      default:
        return response
    }
  }

  return { read }
}
