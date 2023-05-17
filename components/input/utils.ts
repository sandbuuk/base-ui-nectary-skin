import type { TSinchInputType } from './types'

export const inputTypes: readonly TSinchInputType[] = ['text', 'password']

const LETTER_SYMBOL = 'A'
const DIGIT_SYMBOL = '0'
const MULTIPLE_SYMBOL = '+'

type TMaskSymbol = {
  value: string,
  mode: 'digit' | 'letter' | 'exact',
  placeholder: string,
  isMultiple: boolean,
}

const testValue = (maskSymbol: TMaskSymbol, inputValue: string) => {
  switch (maskSymbol.mode) {
    case 'digit': {
      return /\d/.test(inputValue)
    }
    case 'letter': {
      return /\p{Letter}/u.test(inputValue)
    }
    case 'exact': {
      return maskSymbol.value === inputValue
    }
    default: {
      throw new Error(`Invalid test mode: ${maskSymbol.mode}`)
    }
  }
}

const getMaskSymbols = (mask: string): TMaskSymbol[] => {
  const res: TMaskSymbol[] = []
  const chars = [...mask]

  for (let i = 0; i < chars.length;) {
    if (chars[i] === '\\') {
      res.push({
        value: chars[i + 1],
        mode: 'exact',
        placeholder: '_',
        isMultiple: false,
      })

      i += 2

      continue
    }

    if (chars[i] === LETTER_SYMBOL || chars[i] === DIGIT_SYMBOL) {
      const isMultiple = chars[i + 1] === MULTIPLE_SYMBOL
      const mode = chars[i] === LETTER_SYMBOL ? 'letter' : 'digit'

      res.push({
        value: chars[i],
        mode,
        placeholder: '_',
        isMultiple,
      })

      i += isMultiple ? 2 : 1

      continue
    }

    res.push({
      value: chars[i],
      mode: 'exact',
      placeholder: chars[i],
      isMultiple: false,
    })
    i++
  }

  return res
}

const testMaskedValue = (mask: string, input: string): boolean => {
  const inputChars = [...input]
  const maskSymbols = getMaskSymbols(mask)
  let maskIndex = 0
  let inputIndex = 0
  let didMultipleMatchOnce = false

  if (inputChars.length === 0 || maskSymbols.length === 0) {
    return true
  }

  while (true) {
    if (maskIndex === maskSymbols.length) {
      return inputIndex === inputChars.length
    }

    const maskValue = maskSymbols[maskIndex] ?? null
    const nextMaskValue: TMaskSymbol | null = maskSymbols[maskIndex + 1] ?? null
    const isLastMask = nextMaskValue === null

    if (inputIndex === inputChars.length) {
      if (maskValue.isMultiple) {
        return isLastMask
      }

      return maskIndex === maskSymbols.length
    }

    const inputValue = inputChars[inputIndex]

    if (maskValue.isMultiple) {
      if (didMultipleMatchOnce) {
        if (!isLastMask && testValue(nextMaskValue, inputValue)) {
          maskIndex++
          didMultipleMatchOnce = false
          continue
        }

        if (testValue(maskValue, inputValue)) {
          inputIndex++
          continue
        }

        return false
      }

      if (testValue(maskValue, inputValue)) {
        didMultipleMatchOnce = true
        inputIndex++
        continue
      }

      return false
    }

    if (testValue(maskValue, inputValue)) {
      inputIndex++
      maskIndex++
      continue
    }

    return false
  }
}
