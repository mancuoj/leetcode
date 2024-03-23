type Counter = {
  increment: () => number
  decrement: () => number
  reset: () => number
}

function createCounter(init: number): Counter {
  let initVal = init
  return {
    increment: () => ++init,
    decrement: () => --init,
    reset: () => (init = initVal),
  }
}
