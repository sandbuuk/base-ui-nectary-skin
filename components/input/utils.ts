/* eslint-disable max-params */
import type { TSinchInputMaskSymbol, TSinchInputType, TSinchMaskInputResult } from './types'

export const inputTypes: readonly TSinchInputType[] = ['text', 'password']

const LETTER_SYMBOL = 'A'
const DIGIT_SYMBOL = '0'

export const testMaskedValue = (maskSymbol: TSinchInputMaskSymbol, inputValue: string) => {
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

export const getMaskSymbols = (mask: string, placeholder: string | null): TSinchInputMaskSymbol[] => {
  const res: TSinchInputMaskSymbol[] = []
  const chars = [...mask]
  const placeholderChars = placeholder !== null ? [...placeholder] : []
  const shouldUseExternalPlaceholder = placeholderChars.length === chars.length

  for (let i = 0; i < chars.length;) {
    if (chars[i] === '\\') {
      res.push({
        value: chars[i + 1],
        mode: 'exact',
        placeholder: chars[i + 1],
      })

      i += 2

      continue
    }

    if (chars[i] === LETTER_SYMBOL || chars[i] === DIGIT_SYMBOL) {
      const mode = chars[i] === LETTER_SYMBOL ? 'letter' : 'digit'

      res.push({
        value: chars[i],
        mode,
        placeholder: shouldUseExternalPlaceholder ? placeholderChars[i] : '_',
      })

      i++

      continue
    }

    res.push({
      value: chars[i],
      mode: 'exact',
      placeholder: shouldUseExternalPlaceholder ? placeholderChars[i] : chars[i],
    })
    i++
  }

  return res
}

// _-_(-3-)4
// _-_(222222222)4
// _-_-2-2

// _-_(-3-4)
// _-_(2)
// _-_-2-_

// _-_(-3-)4
// _-_(2)4
// _-_-2-_

const replaceCharsWithMask = (chars: string[], maskSymbols: readonly TSinchInputMaskSymbol[], selectionStart: number, selectionEnd: number) => {
  for (let i = selectionStart; i < selectionEnd; i++) {
    chars[i] = maskSymbols[i].placeholder
  }
}

const isMaskedInputComplete = (chars: string[], maskSymbols: readonly TSinchInputMaskSymbol[]): boolean => {
  if (chars.length < maskSymbols.length) {
    return false
  }

  for (let i = 0; i < chars.length; i++) {
    if (!testMaskedValue(maskSymbols[i], chars[i])) {
      return false
    }
  }

  return true
}

export const deleteContentBackward = (inputValue: string, maskSymbols: readonly TSinchInputMaskSymbol[], prevSelectionStart: number, selectionEnd: number): TSinchMaskInputResult | null => {
  if (selectionEnd === 0) {
    return null
  }

  const chars = [...inputValue]
  let selectionStart = prevSelectionStart

  // Delete selected characters range
  if (selectionStart !== selectionEnd) {
    replaceCharsWithMask(chars, maskSymbols, selectionStart, selectionEnd)

    return {
      value: chars.join(''),
      cursorPos: selectionStart,
      isComplete: isMaskedInputComplete(chars, maskSymbols),
    }
  }

  while (selectionStart > 0 && maskSymbols[selectionStart - 1].mode === 'exact') {
    --selectionStart
  }

  if (selectionStart > 0) {
    replaceCharsWithMask(chars, maskSymbols, selectionStart - 1, selectionEnd)

    do {
      --selectionStart
    } while (selectionStart > 0 && maskSymbols[selectionStart - 1].mode === 'exact')

    return {
      value: chars.join(''),
      cursorPos: selectionStart,
      isComplete: isMaskedInputComplete(chars, maskSymbols),
    }
  }

  return null
}

export const deleteContentForward = (inputValue: string, maskSymbols: readonly TSinchInputMaskSymbol[], prevSelectionStart: number, selectionEnd: number): TSinchMaskInputResult | null => {
  if (prevSelectionStart >= inputValue.length) {
    return null
  }

  const chars = [...inputValue]
  let selectionStart = prevSelectionStart

  if (selectionStart !== selectionEnd) {
    replaceCharsWithMask(chars, maskSymbols, selectionStart, selectionEnd)

    return {
      value: chars.join(''),
      cursorPos: selectionEnd,
      isComplete: isMaskedInputComplete(chars, maskSymbols),
    }
  }

  while (selectionStart < maskSymbols.length && maskSymbols[selectionStart].mode === 'exact') {
    selectionStart++
  }

  if (selectionStart < chars.length) {
    replaceCharsWithMask(chars, maskSymbols, selectionStart, selectionStart + 1)

    return {
      value: chars.join(''),
      cursorPos: selectionStart + 1,
      isComplete: isMaskedInputComplete(chars, maskSymbols),
    }
  }

  return null
}

export const beginMaskedComposition = (inputValue: string, maskSymbols: readonly TSinchInputMaskSymbol[], selectionStart: number, selectionEnd: number): TSinchMaskInputResult => {
  const chars = [...inputValue]

  if (selectionStart !== selectionEnd) {
    replaceCharsWithMask(chars, maskSymbols, selectionStart, selectionEnd)
  }

  chars.splice(selectionStart, 1)

  return {
    value: chars.join(''),
    cursorPos: selectionStart,
    isComplete: false,
  }
}

export const endMaskedComposition = (inputValue: string, data: string, maskSymbols: readonly TSinchInputMaskSymbol[], cursorPos: number): TSinchMaskInputResult | null => {
  let selectionStart = Math.max(0, cursorPos - 1)
  const chars = [...inputValue]
  let shouldUpdate = false

  // console.log('TEST', chars, selectionStart)

  // Safari lacks composed symbol in the input.value
  // Other browsers already have symbol in the input.value
  if (maskSymbols.length - chars.length === 1) {
    // Insert composed symbol
    chars.splice(cursorPos, 0, data)
    shouldUpdate = true
    selectionStart = cursorPos
  }

  const maskSymbol = maskSymbols[selectionStart]

  // Composed symbol was added to the end of masked input
  if (selectionStart >= maskSymbols.length) {
    // Trim chars length and return updated value
    chars.length = maskSymbols.length

    return {
      value: chars.join(''),
      cursorPos: selectionStart,
      isComplete: isMaskedInputComplete(chars, maskSymbols),
    }
  }

  if (!testMaskedValue(maskSymbol, data)) {
    replaceCharsWithMask(chars, maskSymbols, selectionStart, selectionStart + 1)

    return {
      value: chars.join(''),
      cursorPos: selectionStart,
      isComplete: isMaskedInputComplete(chars, maskSymbols),
    }
  }

  if (shouldUpdate) {
    return {
      value: chars.join(''),
      cursorPos: cursorPos + 1,
      isComplete: isMaskedInputComplete(chars, maskSymbols),
    }
  }

  return null
}

export const insertText = (inputValue: string, data: string, maskSymbols: readonly TSinchInputMaskSymbol[], prevSelectionStart: number, selectionEnd: number): TSinchMaskInputResult | null => {
  let selectionStart = prevSelectionStart
  const chars = [...inputValue]

  replaceCharsWithMask(chars, maskSymbols, selectionStart, selectionEnd)

  while (selectionStart < maskSymbols.length && maskSymbols[selectionStart].mode === 'exact') {
    selectionStart++
  }

  if (selectionStart === maskSymbols.length) {
    return null
  }

  const maskSymbol = maskSymbols[selectionStart]

  if (chars[selectionStart] === maskSymbol.placeholder) {
    if (testMaskedValue(maskSymbol, data)) {
      chars[selectionStart] = data

      do {
        selectionStart++
      } while (selectionStart < maskSymbols.length && maskSymbols[selectionStart].mode === 'exact')

      return {
        value: chars.join(''),
        cursorPos: selectionStart,
        isComplete: isMaskedInputComplete(chars, maskSymbols),
      }
    }
  }

  if (prevSelectionStart !== selectionStart) {
    return {
      value: chars.join(''),
      cursorPos: selectionStart,
      isComplete: isMaskedInputComplete(chars, maskSymbols),
    }
  }

  return null
}

export const getInitialMaskedValue = (maskSymbols: readonly TSinchInputMaskSymbol[]): string => {
  return maskSymbols.map((smb) => smb.placeholder).join('')
}

export const mergeValueWithMask = (value: string, maskSymbols: readonly TSinchInputMaskSymbol[]): string => {
  const chars = [...value]

  for (let i = 0; i < chars.length; i++) {
    if (!testMaskedValue(maskSymbols[i], chars[i])) {
      chars[i] = maskSymbols[i].placeholder
    }
  }

  const valueLength = chars.length

  chars.length = maskSymbols.length

  for (let i = valueLength; i < maskSymbols.length; i++) {
    chars[i] = maskSymbols[i].placeholder
  }

  return chars.join('')
}
