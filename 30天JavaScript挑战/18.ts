type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), t)
  }
}
