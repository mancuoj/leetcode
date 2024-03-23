type F = (x: number) => number

function compose(functions: F[]): F {
  return (x) => functions.reduceRight((acc, fn) => fn(acc), x)
}
