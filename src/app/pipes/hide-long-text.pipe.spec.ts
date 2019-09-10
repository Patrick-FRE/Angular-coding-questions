import { HideLongTextPipe } from './hide-long-text.pipe'

describe('HideLongTextPipe', () => {
  const newPipe: HideLongTextPipe = new HideLongTextPipe()

  it('should create a new instance', () => {
    expect(newPipe).toBeTruthy()
  })

  // tslint:disable-next-line: max-line-length
  it(`should transform long texts (more than ${newPipe.textLengthLimit} chars) to short texts (${newPipe.textLengthLimit} chars + ...)`, () => {
    const testInput =
      'This is a very long text input. Definitely longer than 25 characters.'
    const expectedResult = testInput.substr(0, newPipe.textLengthLimit) + '...'
    expect(newPipe.transform(testInput)).toBe(expectedResult)
  })
})
