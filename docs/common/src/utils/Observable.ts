import { debounceTimeout } from '@sinch-engage/nectary/utils'

type TObserver = <T>(value: T) => void
type TObservableOptions<T> = {
  distinct?: boolean,
  initialValue?: T,
}

export class Observable<T> {
  private current: T[] = []
  private observers: Set<TObserver> = new Set()
  private callDebounce
  private isDistinct = false

  constructor({ initialValue, distinct }: TObservableOptions<T>) {
    if (typeof initialValue !== 'undefined') {
      this.current[0] = initialValue
    }

    this.isDistinct = distinct === true
    this.callDebounce = debounceTimeout(0)(this.callObservers)
  }

  push(value: T) {
    if (this.isDistinct && this.current[0] === value) {
      return
    }

    this.current[0] = value

    this.callDebounce.fn()
  }

  observe(observer: TObserver) {
    this.observers.add(observer)

    // if (this.current.length > 0) {
    //   observer(this.current[0])
    // }

    return () => {
      this.observers.delete(observer)
    }
  }

  get value(): T {
    if (this.current.length === 0) {
      throw new Error('No value')
    }

    return this.current[0]
  }

  private callObservers = () => {
    const value = this.value

    for (const l of this.observers) {
      l(value)
    }
  }
}
