import funcAsync from '../src'

describe('Test funcAsync', () => {
  it('Should return a fulfilled answer', async (done) => {
    const [answer, exception] = await funcAsync(Promise.resolve(1))
    expect(answer).toBe(1)
    expect(exception).toBeNull()

    const [answer1, exception1] = await funcAsync(1 as any)
    expect(answer1).toBe(1)
    expect(exception1).toBeNull()
    done()
  })

  it('Should throw a rejected reason', async (done) => {
    const [answer, exception] = await funcAsync(
      Promise.reject(new Error('rejected reason'))
    )
    expect(answer).toBeNull()
    expect(exception).toBeInstanceOf(Error)
    expect(exception!.message).toContain('rejected reason')

    const [answer1, exception1] = await funcAsync(Promise.reject(123))
    expect(answer1).toBeNull()
    expect(exception1).toBe(123)
    done()
  })
})
