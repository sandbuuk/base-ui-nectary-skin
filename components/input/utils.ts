/* eslint-disable max-params */
import type { TSinchInputType } from './types'

type TSInchInputMaskSymbolModeDigit = 0
type TSInchInputMaskSymbolModeLetter = 1
type TSInchInputMaskSymbolModeExact = 2
type TSinchInputMaskSymbol = {
  value: string,
  mode: TSInchInputMaskSymbolModeDigit | TSInchInputMaskSymbolModeLetter | TSInchInputMaskSymbolModeExact,
  placeholder: string,
}

type TSinchMaskInputResult = {
  value: string,
  placeholder: string,
  cursorPos: number,
  mergedValue: string,
}

export const inputTypes: readonly TSinchInputType[] = ['text', 'password']

const MASK_SYMBOL_LETTER = 'A'
const MASK_SYMBOL_DIGIT = '0'
const SPACE_CHAR = ' '
const MASK_MODE_DIGIT: TSInchInputMaskSymbolModeDigit = 0
const MASK_MODE_LETTER: TSInchInputMaskSymbolModeLetter = 1
const MASK_MODE_EXACT: TSInchInputMaskSymbolModeExact = 2

const testMaskedValue = (maskSymbol: TSinchInputMaskSymbol, inputChar: string): boolean => {
  switch (maskSymbol.mode) {
    case MASK_MODE_DIGIT: {
      return /\d/.test(inputChar)
    }
    case MASK_MODE_LETTER: {
      return /\p{Letter}/u.test(inputChar)
    }
  }

  return true
}

const isExactMode = (maskSymbol: TSinchInputMaskSymbol) => maskSymbol.mode === MASK_MODE_EXACT
const isEmptyChar = (char: string) => char === SPACE_CHAR

const clampSelectionStart = (selectionStart: number, selectionEnd: number, maskLength: number): number => {
  return Math.min(selectionStart, selectionEnd, maskLength)
}

const clampSelectionEnd = (selectionStart: number, selectionEnd: number, maskLength: number): number => {
  return Math.max(selectionStart, Math.min(selectionEnd, maskLength))
}

export const getMaskSymbols = (mask: string, placeholder: string | null): TSinchInputMaskSymbol[] => {
  const res: TSinchInputMaskSymbol[] = []
  const maskSymbols = [...mask]
  const placeholderChars = placeholder !== null ? [...placeholder] : []
  const shouldUseExternalPlaceholder = placeholderChars.length === maskSymbols.length

  for (let i = 0; i < maskSymbols.length;i++) {
    if (isEmptyChar(maskSymbols[i])) {
      throw new Error('Sinch masked input does not support spaces in mask')
    }

    if (maskSymbols[i] === '\\') {
      res.push({
        value: maskSymbols[i + 1],
        mode: MASK_MODE_EXACT,
        placeholder: shouldUseExternalPlaceholder ? placeholderChars[i] : maskSymbols[i + 1],
      })

      i += 1

      continue
    }

    if (maskSymbols[i] === MASK_SYMBOL_LETTER || maskSymbols[i] === MASK_SYMBOL_DIGIT) {
      res.push({
        value: maskSymbols[i],
        mode: maskSymbols[i] === MASK_SYMBOL_LETTER ? MASK_MODE_LETTER : MASK_MODE_DIGIT,
        placeholder: shouldUseExternalPlaceholder ? placeholderChars[i] : '_',
      })

      continue
    }

    res.push({
      value: maskSymbols[i],
      mode: MASK_MODE_EXACT,
      placeholder: shouldUseExternalPlaceholder ? placeholderChars[i] : maskSymbols[i],
    })
  }

  return res
}

const equalizeCharsAndMaskLength = (chars: string[], maskSymbols: readonly TSinchInputMaskSymbol[]): void => {
  if (chars.length === maskSymbols.length) {
    return
  }

  const prevLength = chars.length

  chars.length = maskSymbols.length

  for (let i = prevLength; i < chars.length; i++) {
    chars[i] = SPACE_CHAR
  }
}

const clearCharsSelection = (chars: string[], selectionStart: number, selectionEnd: number): void => {
  for (let i = selectionStart; i < selectionEnd; i++) {
    chars[i] = SPACE_CHAR
  }
}

const getPlaceholder = (chars: readonly string[], maskSymbols: readonly TSinchInputMaskSymbol[]): string => {
  const res: string[] = new Array(chars.length)

  for (let i = 0; i < maskSymbols.length; i++) {
    res[i] = isEmptyChar(chars[i]) || isExactMode(maskSymbols[i])
      ? maskSymbols[i].placeholder
      : SPACE_CHAR
  }

  return res.join('')
}

const isMaskedInputComplete = (chars: readonly string[], maskSymbols: readonly TSinchInputMaskSymbol[]): boolean => {
  if (chars.length !== maskSymbols.length) {
    throw new Error('chars.length !== maskSymbols.length')
  }

  for (let i = 0; i < chars.length; i++) {
    if (!testMaskedValue(maskSymbols[i], chars[i])) {
      return false
    }
  }

  return true
}

const isCursorAtTheBeginning = (maskSymbols: readonly TSinchInputMaskSymbol[], selectoinStart: number): boolean => {
  if (selectoinStart >= maskSymbols.length) {
    return false
  }

  for (let i = 0; i < selectoinStart; i++) {
    if (!isExactMode(maskSymbols[i])) {
      return false
    }
  }

  return true
}

const getMergedValue = (chars: readonly string[], maskSymbols: readonly TSinchInputMaskSymbol[]): string => {
  if (!isMaskedInputComplete(chars, maskSymbols)) {
    return ''
  }

  const res: string[] = new Array(chars.length)

  for (let i = 0; i < maskSymbols.length; i++) {
    res[i] = isExactMode(maskSymbols[i])
      ? maskSymbols[i].value
      : chars[i]
  }

  return res.join('')
}

const compileResult = (chars: readonly string[], maskSymbols: readonly TSinchInputMaskSymbol[], cursorPos: number) => {
  return {
    value: chars.join(''),
    placeholder: getPlaceholder(chars, maskSymbols),
    cursorPos,
    mergedValue: getMergedValue(chars, maskSymbols),
  }
}

export const deleteContentBackward = (inputValue: string, maskSymbols: readonly TSinchInputMaskSymbol[], prevSelectionStart: number, prevSelectionEnd: number): TSinchMaskInputResult | null => {
  if (prevSelectionEnd === 0) {
    // Cursor is at the start
    return null
  }

  const chars = [...inputValue]
  let selectionStart = clampSelectionStart(prevSelectionStart, prevSelectionEnd, maskSymbols.length)
  const selectionEnd = clampSelectionEnd(selectionStart, prevSelectionEnd, maskSymbols.length)

  // Delete selected characters range
  if (selectionStart !== selectionEnd) {
    equalizeCharsAndMaskLength(chars, maskSymbols)
    clearCharsSelection(chars, selectionStart, selectionEnd)

    return compileResult(chars, maskSymbols, selectionStart)
  }

  // Skip exact-match symbols
  while (selectionStart > 0 && isExactMode(maskSymbols[selectionStart - 1])) {
    --selectionStart
  }

  // If still has symbol to delete
  if (selectionStart > 0) {
    equalizeCharsAndMaskLength(chars, maskSymbols)
    // Replace one symbol with mask
    clearCharsSelection(chars, selectionStart - 1, selectionStart)

    do {
      --selectionStart
    } while (selectionStart > 0 && isExactMode(maskSymbols[selectionStart - 1]))

    return compileResult(chars, maskSymbols, selectionStart)
  }

  return null
}

export const deleteContentForward = (inputValue: string, maskSymbols: readonly TSinchInputMaskSymbol[], prevSelectionStart: number, prevSelectionEnd: number): TSinchMaskInputResult | null => {
  if (prevSelectionStart >= maskSymbols.length) {
    return null
  }

  const chars = [...inputValue]
  let selectionStart = clampSelectionStart(prevSelectionStart, prevSelectionEnd, maskSymbols.length)
  const selectionEnd = clampSelectionEnd(selectionStart, prevSelectionEnd, maskSymbols.length)

  // Delete selected characters range
  if (selectionStart !== selectionEnd) {
    equalizeCharsAndMaskLength(chars, maskSymbols)
    clearCharsSelection(chars, selectionStart, selectionEnd)

    return compileResult(chars, maskSymbols, selectionEnd)
  }

  // Skip exact-match symbols
  while (selectionStart < maskSymbols.length && isExactMode(maskSymbols[selectionStart])) {
    selectionStart++
  }

  if (selectionStart < chars.length) {
    equalizeCharsAndMaskLength(chars, maskSymbols)
    // Replace one symbol with mask
    clearCharsSelection(chars, selectionStart, selectionStart + 1)

    return compileResult(chars, maskSymbols, selectionStart + 1)
  }

  return null
}

export const beginMaskedComposition = (inputValue: string, maskSymbols: readonly TSinchInputMaskSymbol[], selectionStart: number): Pick<TSinchMaskInputResult, 'value' | 'placeholder'> => {
  const chars = [...inputValue]
  const placeholder: string[] = new Array(chars.length)

  for (let i = 0; i < maskSymbols.length; i++) {
    placeholder[i] = isEmptyChar(chars[i]) || isExactMode(maskSymbols[i])
      ? maskSymbols[i].placeholder
      : SPACE_CHAR
  }

  placeholder[selectionStart] = SPACE_CHAR

  // Splice single character, since browsers add CompositionChar even if 'beforeinput' tries to prevent it
  chars.splice(selectionStart, 1)

  return {
    value: chars.join(''),
    placeholder: placeholder.join(''),
  }
}

export const endMaskedComposition = (inputValue: string, data: string, maskSymbols: readonly TSinchInputMaskSymbol[], cursorPos: number): TSinchMaskInputResult | null => {
  let selectionStart = cursorPos
  const chars = [...inputValue]

  // Safari lacks composed composed symbol in the input.value
  // Other browsers already have composed symbol in the input.value
  if (maskSymbols.length - chars.length === 1) {
    // Insert composed symbol
    chars.splice(selectionStart, 0, SPACE_CHAR)
  } else {
    // Clear composed symbol
    selectionStart--
    chars[selectionStart] = SPACE_CHAR
  }

  // Remove entered Composed Character
  // Composed Character is force inserted by browser
  // if (maskSymbols.length < chars.length) {
  //   chars.splice(selectionStart, chars.length - maskSymbols.length)
  // }

  /* Insert text as usual */
  // Skip placeholder symbols
  while (selectionStart < maskSymbols.length && isExactMode(maskSymbols[selectionStart])) {
    selectionStart++
  }

  // If reached end, while skipping
  if (selectionStart >= maskSymbols.length) {
    return compileResult(chars, maskSymbols, selectionStart)
  }

  const maskSymbol = maskSymbols[selectionStart]

  // Test and insert input char
  if (isEmptyChar(chars[selectionStart]) && testMaskedValue(maskSymbol, data)) {
    chars[selectionStart] = data

    // Skip placeholder symbols
    do {
      selectionStart++
    } while (selectionStart < maskSymbols.length && isExactMode(maskSymbols[selectionStart]))
  }

  return compileResult(chars, maskSymbols, selectionStart)
}

export const insertText = (inputValue: string, data: string, maskSymbols: readonly TSinchInputMaskSymbol[], selectionStart: number, selectionEnd: number): TSinchMaskInputResult | null => {
  const chars = [...inputValue]
  let cursorPos = selectionStart

  equalizeCharsAndMaskLength(chars, maskSymbols)
  clearCharsSelection(chars, selectionStart, selectionEnd)

  // Skip placeholder symbols (put cursor onto next editable position)
  while (cursorPos < maskSymbols.length && isExactMode(maskSymbols[cursorPos])) {
    cursorPos++
  }

  // If reached end, while skipping
  if (cursorPos >= maskSymbols.length) {
    return compileResult(chars, maskSymbols, cursorPos)
  }

  const maskSymbol = maskSymbols[cursorPos]

  // Test and insert input char
  if (isEmptyChar(chars[cursorPos]) && testMaskedValue(maskSymbol, data)) {
    chars[cursorPos] = data

    // Skip placeholder symbols (put cursor onto next editable position)
    do {
      cursorPos++
    } while (cursorPos < maskSymbols.length && isExactMode(maskSymbols[cursorPos]))
  }

  return compileResult(chars, maskSymbols, cursorPos)
}

const doesPastePrefixMatch = (chars: readonly string[], maskSymbols: readonly TSinchInputMaskSymbol[], fromIndex: number, toIndex: number) => {
  for (let i = fromIndex; i < toIndex; i++) {
    const maskSymbol = maskSymbols[i]
    const data = chars[i - fromIndex]

    if (!isExactMode(maskSymbol) || data !== maskSymbol.value) {
      return false
    }
  }

  return true
}

export const insertFromPaste = (inputValue: string, data: string, maskSymbols: readonly TSinchInputMaskSymbol[], selectionStart: number, selectionEnd: number): TSinchMaskInputResult | null => {
  const chars = [...inputValue]
  let cursorPos = selectionStart

  equalizeCharsAndMaskLength(chars, maskSymbols)
  clearCharsSelection(chars, selectionStart, selectionEnd)

  // Skip placeholder symbols (put cursor onto next editable position)
  while (cursorPos < maskSymbols.length && isExactMode(maskSymbols[cursorPos])) {
    cursorPos++
  }

  // If reached end, while skipping
  if (cursorPos >= maskSymbols.length) {
    return compileResult(chars, maskSymbols, cursorPos)
  }

  const dataChars = [...data]
  let dataIndexOffset = 0

  if (isCursorAtTheBeginning(maskSymbols, cursorPos)) {
    if (doesPastePrefixMatch(dataChars, maskSymbols, 0, cursorPos)) {
      dataIndexOffset = cursorPos
    } else if (doesPastePrefixMatch(dataChars, maskSymbols, selectionStart, cursorPos)) {
      dataIndexOffset = cursorPos - selectionStart
    }
  }

  const dataLength = Math.min(dataChars.length, maskSymbols.length - cursorPos)

  for (let i = 0; i < dataLength; i++, cursorPos++) {
    const data = dataChars[i + dataIndexOffset]
    const maskSymbol = maskSymbols[cursorPos]

    if (isExactMode(maskSymbol)) {
      if (maskSymbol.value === data) {
        continue
      }

      break
    }

    if (isEmptyChar(chars[cursorPos])) {
      if (testMaskedValue(maskSymbol, data)) {
        chars[cursorPos] = data
        continue
      }

      break
    } else {
      if (chars[cursorPos] === data) {
        continue
      }

      break
    }

    // Should not get here
  }

  return compileResult(chars, maskSymbols, cursorPos)
}

export const splitValueAndMask = (value: string, maskSymbols: readonly TSinchInputMaskSymbol[]): Pick<TSinchMaskInputResult, 'value' | 'placeholder'> => {
  const chars = [...value]

  equalizeCharsAndMaskLength(chars, maskSymbols)

  for (let i = 0; i < maskSymbols.length; i++) {
    if (isExactMode(maskSymbols[i]) || !testMaskedValue(maskSymbols[i], chars[i])) {
      chars[i] = SPACE_CHAR
    }
  }

  return {
    value: chars.join(''),
    placeholder: getPlaceholder(chars, maskSymbols),
  }
}

export const getMergedValueSliced = (value: string, maskSymbols: readonly TSinchInputMaskSymbol[], selectionStart: number, selectionEnd: number): string => {
  const chars = [...value]

  equalizeCharsAndMaskLength(chars, maskSymbols)

  for (let i = selectionStart; i < selectionEnd; i++) {
    if (isExactMode(maskSymbols[i])) {
      chars[i] = maskSymbols[i].value
    }
  }

  return chars.slice(selectionStart, selectionEnd).join('')
}
