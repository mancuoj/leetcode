// https://leetcode.cn/problems/cache-with-time-limit/
var TimeLimitedCache = function () {
  this.cache = new Map()
}

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const valueInCache = this.cache.get(key)
  if (valueInCache) {
    clearTimeout(valueInCache.timeout)
  }
  const timeout = setTimeout(() => this.cache.delete(key), duration)
  this.cache.set(key, { value, timeout })
  return Boolean(valueInCache)
}

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  return this.cache.has(key) ? this.cache.get(key).value : -1
}

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.cache.size
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
