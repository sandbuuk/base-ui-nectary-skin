import type { Message } from '.'

export const CHANNEL = 'ALL_ABOARD_THE_BUS'

export const listenToBus = <M extends Message<unknown, unknown>, T extends M>(
  callback: (message: T) => void,
  filter: (message: M) => message is T = (m: M): m is T => true
) => {
  const bus = new BroadcastChannel(CHANNEL)

  bus.addEventListener('message', (e) => {
    if (filter(e.data)) {
      callback(e.data)
    }
  })

  return () => {
    bus.close()
  }
}

export const sendMessageOnBus = (message: Message<unknown, unknown>) => {
  const bus = new BroadcastChannel(CHANNEL)

  bus.postMessage(message)
  bus.close()
}
