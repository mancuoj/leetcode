function createCounter(n: number): () => number {
  return () => n++
}
