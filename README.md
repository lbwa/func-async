<h1 align="center">Functional async function</h1>

A [golang function like](https://golang.org/doc/effective_go.html#multiple-returns) helper for avoiding async function `try...catch` mental model.

## Installation

- Using `npm`

  ```bash
  $ npm install func-async --save
  ```

- Using `yarn`

  ```nash
  $ yarn add func-async
  ```

## Usage

```ts
import funcAsync from 'func-async'

export async function anyFunc() {
  const [answer, exception] = await funcAsync(anyPromiseLikeOperation())

  if (exception) {
    throw exception
  }

  if (answer) {
    // ...
  }
}
```

## License

MIT @ [Bowen Liu](https://github.com/lbwa)
