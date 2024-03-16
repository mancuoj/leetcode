/**
 * https://leetcode.cn/problems/design-cancellable-function/
 * @param {Generator} generator
 * @return {[Function, Promise]}
 */
var cancellable = function (generator) {
  let cancel
  const promise = new Promise(async (resolve, reject) => {
    cancel = async () => {
      try {
        let p = generator.throw('Cancelled')
        resolve(p.value)
      } catch (e) {
        reject(e)
      }
    }

    try {
      let p = generator.next()
      while (!p.done) {
        try {
          p = generator.next(await p.value)
        } catch (e) {
          p = generator.throw(e)
        }
      }
      resolve(await p.value)
    } catch (e) {
      reject(e)
    }
  })

  return [cancel, promise]
}

/**
 * function* tasks() {
 *   const val = yield new Promise(resolve => resolve(2 + 2));
 *   yield new Promise(resolve => setTimeout(resolve, 100));
 *   return val + 1;
 * }
 * const [cancel, promise] = cancellable(tasks());
 * setTimeout(cancel, 50);
 * promise.catch(console.log); // logs "Cancelled" at t=50ms
 */
