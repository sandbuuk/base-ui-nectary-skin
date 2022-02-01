/**
 * This type tries to follow the `Flux Standard Action`.
 * We call it Message however instead of Action.
 * https://github.com/redux-utilities/flux-standard-action
 */

export type MessageData<T, P, M = unknown> =
  { type: T, payload: P, meta?: M}

export type MessageError<T, E = unknown, M = unknown> =
  { type: T, payload: E, error: true, meta?: M }

export type Message<T, P, E = unknown, M = unknown> =
  | MessageError<T, E, M>
  | MessageData<T, P, M>

// @ts-ignore
export const isData = <T, P, E, M>(a?: Message<T, P, E, M>): a is MessageData<T, P, M> => (a != null) && a.error !== true
// @ts-ignore
export const isError = <T, P, E, M>(a?: Message<T, P, E, M>): a is MessageError<T, E, M> => (a != null) && a.error === true

export const filterMessage = <M extends Message<any, any>, T extends M>(filter: ((m: M) => m is T)) =>
  (onMessage: (m: T) => void) => (m: M) => {
    if (filter(m)) {
      onMessage(m)
    }
  }
