type Callback = (...args: any[]) => any
type Subscription = {
  unsubscribe: () => void
}

class EventEmitter {
  private events: { [event: string]: Callback[] }

  constructor() {
    this.events = {}
  }

  subscribe(eventName: string, callback: Callback): Subscription {
    this.events[eventName] ||= []
    this.events[eventName].push(callback)

    return {
      unsubscribe: () => {
        this.events[eventName] = this.events[eventName].filter(
          (fn) => fn !== callback,
        )
        if (this.events[eventName].length === 0) delete this.events[eventName]
      },
    }
  }

  emit(eventName: string, args: any[] = []): any[] {
    if (!(eventName in this.events)) return []
    return this.events[eventName].map((fn) => fn(...args))
  }
}
