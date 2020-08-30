export default function funcAsync<V, R = Error>(promise: Promise<V>) {
  return Promise.resolve(promise)
    .then<[V, null]>((answer) => [answer, null])
    .catch<[null, R]>((reason: R) => [null, reason])
}
