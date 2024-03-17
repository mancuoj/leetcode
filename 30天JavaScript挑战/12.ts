type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
  return (await promise1) + (await promise2)
}
